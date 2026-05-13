import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard/Dashboard.vue';
// Missing imports causing the blank screens:
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Profile from '../views/Profile.vue';
import Registration from '../views/Registration.vue';
import Notfound from '../views/Notfound.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { 
    path: '/dashboard', 
    component: Dashboard,
    children: [
      { path: '', component: () => import('../views/Dashboard/Overview.vue') },
      { path: 'reports', component: () => import('../views/Dashboard/Reports.vue') },
      { path: 'settings', component: () => import('../views/Dashboard/Settings.vue') }
    ]
  },
  // Catch-all route for unmapped paths
  { path: '/:pathMatch(.*)*', component: Notfound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
