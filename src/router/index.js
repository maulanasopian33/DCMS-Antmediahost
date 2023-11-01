// import Home from '../App.vue'; // Sesuaikan dengan struktur proyek Anda
import Home from '../Page/Home.vue'
import Login from '../Page/login.vue'
import visitDC from '../Page/visit_dc.vue'
import Product from '../Page/Products.vue'
import Teams from '../Page/teams.vue'
import AddVisitDc from '../Page/add_visitDC.vue'
import Profile from '../Page/profile.vue'
import ReportVisit from '../Page/reportVisitDc.vue'
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login/:code',
    name: 'proses',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/visitdc',
    name: 'Visit DC',
    component: visitDC,
  },
  {
    path: '/visitdc/report/:id',
    name: 'Report Visit DC',
    component: ReportVisit,
  },
  {
    path: '/visitdc/add',
    name: 'add Visit DC',
    component: AddVisitDc,
  },
  {
    path: '/products',
    name: 'Products',
    component: Product,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  // Tambahkan rute lainnya di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

