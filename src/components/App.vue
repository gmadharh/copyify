<template>
  <div class="grid gap-4 grid-cols-2 grid-rows-3 items-center justify-center">
    <TrackInfo heading="Song Name" :value="song" />
    <CopyButton @copy="copyToClickboard(song)" />
    <TrackInfo heading="Artist" :value="artist" />
    <CopyButton @copy="copyToClickboard(artist)" />
    <TrackInfo heading="Album" :value="album" />
    <CopyButton @copy="copyToClickboard(album)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TrackInfo from './TrackInfo.vue'
import CopyButton from './CopyButton.vue'
export default defineComponent({
  components: {
    TrackInfo,
    CopyButton,
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
