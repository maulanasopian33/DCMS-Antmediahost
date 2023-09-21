// import Home from '../App.vue'; // Sesuaikan dengan struktur proyek Anda
import Home from '../Page/Home.vue'
import Login from '../Page/login.vue'
import visitDC from '../Page/visit_dc.vue'
import Product from '../Page/Products.vue'
import Teams from '../Page/teams.vue'
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/products',
    name: 'Products',
    component: Product,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
  // Tambahkan rute lainnya di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

