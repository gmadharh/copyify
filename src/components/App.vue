<template>
  <v-container>
    <v-row class="align-center">
      <v-col>
        <TrackInfo heading="Song Name" :value="song" />
      </v-col>
      <v-col>
        <v-btn @click="copyToClickboard(song)">Copy</v-btn>
      </v-col>
    </v-row>
    <v-row class="align-center">
      <v-col>
        <TrackInfo heading="Artist" :value="artist" />
      </v-col>
      <v-col>
        <v-btn @click="copyToClickboard(artist)">Copy</v-btn>
      </v-col>
    </v-row>
    <v-row class="align-center">
      <v-col>
        <TrackInfo heading="Album" :value="album" />
      </v-col>
      <v-col>
        <v-btn @click="copyToClickboard(album)">Copy</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
