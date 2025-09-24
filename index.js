import { createApp } from 'vue'
import Index from './components/index.vue'
// import Index from './components/UnstakeIndex.vue'
import i18n from './i18n'
import store from './store'
import router from './router'

const app = createApp(Index)

app.use(i18n)
app.use(store)
app.use(router)

app.mount('#app')
