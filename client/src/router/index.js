import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Produto from '../views/Produto.vue';
import Login from '../views/Login.vue';
import Usuario from '../views/usuario/Usuario.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/usuario',
    nome: 'usuario',
    component: Usuario,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth'});
  }
})

export default router
