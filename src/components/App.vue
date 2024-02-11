<template>
  <div class="flex h-screen items-center">
    <div class="flex flex-row content-center justify-center">
      <div class="self-center m-1">
        <img :src="image" width="150px" height="150px" alt="Song Image" />
      </div>

      <div class="self-center">
        <TrackInfo :value="song" />
        <TrackInfo :value="artist" />
        <TrackInfo :value="album" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Icon } from '@iconify/vue'
import TrackInfo from './TrackInfo.vue'
export default defineComponent({
  components: {
    TrackInfo,
    Icon,
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
