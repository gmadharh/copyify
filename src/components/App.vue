<template>
  <TrackInfo heading="Song Name" :value="song" />
  <button @click="copyToClickboard(song)">Copy</button>
  <TrackInfo heading="Artist" :value="artist" />
  <button @click="copyToClickboard(artist)">Copy</button>
  <TrackInfo heading="Album" :value="album" />
  <button @click="copyToClickboard(album)">Copy</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrackInfo from './TrackInfo.vue'
export default defineComponent({
  components: {
    TrackInfo,
  },
  data() {
    return {
      song: '',
      artist: '',
      album: '',
    }
  },
  methods: {
    async getTrackFromStorage() {
      return await chrome.storage.local.get(['songName', 'artist', 'albumName'])
    },
    copyToClickboard(text: string) {
      navigator.clipboard.writeText(text).catch((error) => {
        console.log('error copying: ', error)
      })
    },
  },
  mounted() {
    this.getTrackFromStorage().then((result) => {
      this.song = result.songName
      this.artist = result.artist
      this.album = result.albumName
    })
  },
})
</script>
