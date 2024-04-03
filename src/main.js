import { createApp } from 'vue'
import './input.css'
import 'vue-final-modal/style.css'
import App from './App.vue'
import router from './router';
import Vue3Storage from "vue3-storage";
import { createVfm } from 'vue-final-modal'
import VueSignaturePad from 'vue-signature-pad'
import VueEasyLightbox from 'vue-easy-lightbox'
import {LoadingPlugin} from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Notifications from '@kyvg/vue3-notification'
import VueApexCharts from "vue3-apexcharts"
import { VueReCaptcha } from "vue-recaptcha-v3";
import "vue-search-select/dist/VueSearchSelect.css"
import GlobalMixin from "./mixins"
const app = createApp(App);
const vfm = createVfm()
  
// Menambahkan fungsi sebagai mixin global
app.mixin(GlobalMixin);
// Buat instansi Axios
app.use(vfm)
app.use(VueReCaptcha, { siteKey: "6Lf1t6MpAAAAADTuHeRt7HueZwTgEr_wOGvKCyqj" })
app.use(Notifications)
app.use(VueSignaturePad)
app.use(LoadingPlugin)
app.use(VueEasyLightbox)
app.use(router)
app.use(VueApexCharts)
app.use(Vue3Storage)
app.mount('#app')
