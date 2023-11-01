import { createApp } from 'vue'
import './input.css'
import 'vue-final-modal/style.css'
import App from './App.vue'
import router from './router';
import Vue3Storage from "vue3-storage";
import { createVfm } from 'vue-final-modal'
import VueSignaturePad from 'vue-signature-pad';
import VueEasyLightbox from 'vue-easy-lightbox'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Notifications from '@kyvg/vue3-notification'
const app = createApp(App);
const vfm = createVfm()
app.use(vfm)
app.use(Notifications)
app.use(VueSignaturePad)
app.use(LoadingPlugin)
app.use(VueEasyLightbox)
app.use(router)
app.use(Vue3Storage)
app.mount('#app')
