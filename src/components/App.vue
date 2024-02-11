<template>
  <div
    class="grid gap-4 grid-cols-2 grid-rows-3 items-center justify-center"
  ></div>
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
      image: '',
    }
  },
  methods: {
    // Get the song name, artist and album which have been stored locally after being scraped
    async getTrackFromStorage() {
      return await chrome.storage.local.get([
        'songName',
        'artist',
        'albumName',
        'image',
      ])
    },

    // copy field to clipboard
    copyToClickboard(text: string) {
      navigator.clipboard.writeText(text).catch((error) => {
        console.log('error copying: ', error)
      })
    },
  },

  /*
    When popup.html is clicked, App is mounted
    Retrieve track fields from storage and display them
  */
  mounted() {
    this.getTrackFromStorage().then((result) => {
      this.song = result.songName
      this.artist = result.artist
      this.album = result.albumName
      this.image = result.image
    })
  },
})
</script>
