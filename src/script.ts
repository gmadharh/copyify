import { Track } from './types.js'

const track: Track = { songName: '', artist: '', albumName: '', image: '' }

// Create MutationObserver to capture HTML elements when they load in
// Since Spotify track webpage loads them in dynamically, so wait till they exist
const observer = new MutationObserver(function (mutations, mutationInstance) {
  // Capture DOM elements when they are loaded in
  const songName = document.querySelector('.encore-text-headline-large')
  const artist = document.querySelector('a[data-testid="creator-link"]')
  const albumName = document.querySelector('span.encore-text-body-small a')
  const image = document.querySelector(
    '.CmkY1Ag0tJDfnFXbGgju img'
  ) as HTMLImageElement

  // Once all elements have been captured

  if (songName && artist && albumName && image) {
    // Set the track object to text content of DOM elements
    track.songName = songName.textContent ?? ''
    track.artist = artist.textContent ?? ''
    track.albumName = albumName.textContent ?? ''
    track.image = image.src

    // Write track info to storage so it can be retrieved later
    for (const key in track) {
      chrome.storage.local
        .set({ [key]: track[key as keyof Track] })
        .then(() => {})
    }

    console.log('printing TRACK:', track)

    // Stop listening for changes
    mutationInstance.disconnect()
  }
})

// Start listening for changes
// Listening throughout whole document, and when the elements we need load in
observer.observe(document, {
  childList: true,
  subtree: true,
})
