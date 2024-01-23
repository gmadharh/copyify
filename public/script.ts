const observer = new MutationObserver(() => {
  const h1Element = document.querySelector('.encore-text-headline-large')
  if (h1Element) {
    console.log('song title :', h1Element.textContent)
    // Do something with the h1 element
    observer.disconnect() // Stop observing once found
  }
})

observer.observe(document.body, { childList: true, subtree: true })
