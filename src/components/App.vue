<template>
  <TrackInfo heading="Song Name" :value="song" />
  <TrackInfo Info heading="Artist" :value="artist" />
  <TrackInfo heading="Album" :value="album" />
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue'
import TrackInfo from './TrackInfo.vue'
import { Track } from '../types.js'
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
