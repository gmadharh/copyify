import { createApp } from 'vue'
import App from './components/App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn, VTextarea } from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components: {
    VBtn,
    VTextarea,
  },
  directives,
})

const app = createApp(App).use(vuetify)
app.mount('.app')
