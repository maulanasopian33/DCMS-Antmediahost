// import Home from '../App.vue'; // Sesuaikan dengan struktur proyek Anda
import Home from '../Page/Home.vue'
import Login from '../Page/login.vue'
import visitDC from '../Page/visit_dc.vue'
import Product from '../Page/Products.vue'
import Teams from '../Page/teams.vue'
import AddVisitDc from '../Page/add_visitDC.vue'
import Profile from '../Page/profile.vue'
import ReportVisit from '../Page/reportVisitDc.vue'
import RequestEmail from '../Page/requestemail.vue'
import RequestGuest from '../Page/guestRequest.vue'
// admin import page
import AdminLogin from '../Page/admin/login.vue'
import dashboardpanel from '../Page/admin/dashboard.vue'
import requestvisitdc from '../Page/admin/requestvisitdc.vue'
import usermanage from '../Page/admin/usermanage.vue'
import surat from '../Page/admin/surat.vue'
import confirm from '../Page/admin/confirmsurat.vue'

// middleware

import adminAuth from '../middleware/adminAuth'
import userAuth from '../middleware/userAuth'

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      middleware : [userAuth]
    },
  },
  {
    path: '/login/:code',
    name: 'proses',
    component: Login,
  },
  {
    path: '/visit/request',
    name: 'request Visit',
    component: RequestEmail,
  },
  {
    path: '/visit/request/:id',
    name: 'guest Request Visit DC',
    component: RequestGuest,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/request',
    name: 'Visit DC',
    component: visitDC,
    meta : {
      middleware : [userAuth]
    },
  },
  {
    path: '/requestdc/report/:id',
    name: 'Report Visit DC',
    component: ReportVisit,
  },
  {
    path: '/request/add',
    name: 'add Visit DC',
    component: AddVisitDc,
    meta : {
      middleware : [userAuth]
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: Product,
    meta : {
      middleware : [userAuth]
    },
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
    meta : {
      middleware : [userAuth]
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta : {
      middleware : [userAuth]
    },
  },

  // Route Admin Panel
  {
    path: '/admin/login',
    name: 'login Admin',
    component: AdminLogin,
  },
  {
    path: '/admin',
    name: 'dashboard Admin',
    component: dashboardpanel,
    meta : {
      middleware : [adminAuth]
    },
  },
  {
    path: '/admin/visitdc',
    name: 'Visit DC Admnin',
    component: requestvisitdc,
    meta : {
      middleware : [adminAuth]
    },
  },
  {
    path: '/admin/usermanage',
    name: 'User Manage Admin',
    component: usermanage,
    meta : {
      middleware : [adminAuth]
    },
  },
  {
    path: '/admin/surat',
    name: 'Manage Surat Admin',
    component: surat,
    meta : {
      middleware : [adminAuth]
    },
  },
  {
    path: '/admin/surat/:id',
    name: 'confirm Surat Admin',
    component: confirm,
    meta : {
      middleware : [adminAuth]
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Menerapkan middleware sebelum setiap navigasi rute
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const context = { next, router };
    middleware[0]({ ...context });
  }
  return next();
});
export default router;

