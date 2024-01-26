import { Track } from './types.js'
import { createApp } from 'vue'
document.addEventListener('DOMContentLoaded', function () {
  const songText = document.getElementById('song-name-text') as HTMLInputElement
  const artistText = document.getElementById('artist-text') as HTMLInputElement
  const albumText = document.getElementById('album-text') as HTMLInputElement

  const app = createApp({
    data() {
      return {
        song: '',
        artist: '',
        album: '',
      }
    },
    methods: {},
  })
  app.mount('.song-info')

  chrome.runtime.onMessage.addListener(function (
    request: { action: string; info: Track },
    sender,
    sendResponse
  ) {
    if (request.action === 'track') {
      console.log('index.ts recieved track', request.info)
      if (songText !== null) {
        songText.value = request.info.songName
      }

      if (artistText !== null) {
        artistText.value = request.info.artist
      }

      if (albumText !== null) {
        albumText.value = request.info.albumName
      }
    }
  })
})
