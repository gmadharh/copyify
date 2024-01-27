<template>
  <TrackInfo heading="Song Name" :value="song" />
  <TrackInfo Info heading="Artist" :value="artist" />
  <TrackInfo heading="Album" :value="album" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      song: '',
      artist: '',
      album: '',
    }
  },
  mounted() {
    chrome.runtime.onMessage.addListener(
      (request: { action: string; info: Track }, sender, sendResponse) => {
        if (request.action === 'track') {
          console.log('index.ts recieved track', request.info)
          this.song = request.info.songName

          this.artist = request.info.artist

          this.album = request.info.albumName
        }
      }
    )
  },
})
</script>
