console.log('executing script')
import { Track } from './types.js'

const track: Track = { songName: '', artist: '', albumName: '' }

const observer = new MutationObserver(function (mutations, mutationInstance) {
  const songName = document.querySelector('.encore-text-headline-large')
  const artist = document.querySelector('a[data-testid="creator-link"]')
  const albumName = document.querySelector('span.encore-text-body-small a')

  if (songName && artist && albumName) {
    track.songName = songName.textContent ?? ''
    track.artist = artist.textContent ?? ''
    track.albumName = albumName.textContent ?? ''

    // send message to background with track info
    // background sends message to index.ts with track info
    // track info gets displayed in popup html

    console.log(track)

    chrome.runtime.sendMessage({ action: 'track', info: track })

    for (const key in track) {
      chrome.storage.local
        .set({ [key]: track[key as keyof Track] })
        .then(() => {
          console.log('track is setting ', key, track[key as keyof Track])
        })
    }
    mutationInstance.disconnect()
  }
})

observer.observe(document, {
  childList: true,
  subtree: true,
})
