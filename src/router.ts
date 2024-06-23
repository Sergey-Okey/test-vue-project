import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import User from './views/User.vue';
import CreateUser from './views/CreateUser.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreateUser
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
