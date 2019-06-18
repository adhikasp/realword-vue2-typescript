import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import Home from './views/Home.vue';
import ArticleView from '@/views/ArticleView.vue';
import SignInView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass : 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: ArticleView,
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
} as RouterOptions);
