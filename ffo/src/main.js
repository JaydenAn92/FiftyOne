import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import parallaxMotion js */
import parallaxMotion from '@/assets/js/parallaxMotion'

/* add icons to the library */
library.add(fas, fab)
const app = createApp(App)

app.use(store)
app.use(router)
app.use(parallaxMotion)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
