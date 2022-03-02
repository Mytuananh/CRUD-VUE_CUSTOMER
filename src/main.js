import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faUserSlash} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faPen, faTrash, faBookmark, faUserSlash);
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("font-awesome-icon", FontAwesomeIcon)