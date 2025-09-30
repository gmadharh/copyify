// Flag to track if buttons are already injected
let buttonsInjected = false

// Function to create a copy button
function createCopyButton(text: string): HTMLButtonElement {
  const button = document.createElement('button')
  button.className = 'copyify-btn'
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `
  
  // Add styles to the button
  button.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-left: 8px;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    vertical-align: middle;
  `
  
  // Add hover effect
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    button.style.borderColor = 'rgba(255, 255, 255, 0.3)'
  })
  
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
    button.style.borderColor = 'rgba(255, 255, 255, 0.2)'
  })
  
  // Copy to clipboard on click
  button.addEventListener('click', async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      await navigator.clipboard.writeText(text)
      
      // Show success feedback (checkmark)
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `
      button.style.backgroundColor = 'rgba(30, 215, 96, 0.2)'
      button.style.borderColor = 'rgba(30, 215, 96, 0.4)'
      
      // Reset after 2 seconds
      setTimeout(() => {
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `
        button.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
        button.style.borderColor = 'rgba(255, 255, 255, 0.2)'
      }, 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  })
  
  return button
}

// Function to inject copy buttons
function injectCopyButtons() {
  if (buttonsInjected) return
  
  // Capture DOM elements
  const songNameElement = document.querySelector('.encore-text-headline-large')
  const artistElement = document.querySelector('a[data-testid="creator-link"]')
  const albumElement = document.querySelector('span.encore-text-body-small a')
  
  // Once all elements have been captured
  if (songNameElement && artistElement && albumElement) {
    const songName = songNameElement.textContent ?? ''
    const artist = artistElement.textContent ?? ''
    const albumName = albumElement.textContent ?? ''
    
    // Create a wrapper for song name + button
    if (!songNameElement.parentElement?.querySelector('.copyify-btn')) {
      const songButton = createCopyButton(songName)
      songButton.title = 'Copy song name'
      
      // Insert button after song name
      const songParent = songNameElement.parentElement
      if (songParent) {
        const wrapper = document.createElement('span')
        wrapper.style.cssText = 'display: inline-flex; align-items: center;'
        songNameElement.parentNode?.insertBefore(wrapper, songNameElement)
        wrapper.appendChild(songNameElement)
        wrapper.appendChild(songButton)
      }
    }
    
    // Create a wrapper for artist + button
    if (!artistElement.parentElement?.querySelector('.copyify-btn')) {
      const artistButton = createCopyButton(artist)
      artistButton.title = 'Copy artist name'
      artistElement.parentNode?.insertBefore(artistButton, artistElement.nextSibling)
    }
    
    // Create a wrapper for album + button
    if (!albumElement.parentElement?.querySelector('.copyify-btn')) {
      const albumButton = createCopyButton(albumName)
      albumButton.title = 'Copy album name'
      albumElement.parentNode?.insertBefore(albumButton, albumElement.nextSibling)
    }
    
    buttonsInjected = true
    console.log('Copyify buttons injected:', { songName, artist, albumName })
  }
}

// Create MutationObserver to capture HTML elements when they load in
// Since Spotify track webpage loads them in dynamically, so wait till they exist
const observer = new MutationObserver(function () {
  injectCopyButtons()
})

// Start listening for changes
// Listening throughout whole document, and when the elements we need load in
observer.observe(document, {
  childList: true,
  subtree: true,
})

// Also try to inject immediately in case elements are already loaded
injectCopyButtons()
