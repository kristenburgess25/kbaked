import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Categories from '../views/Categories.vue'
import About from '../views/About.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
      props: true,
      // can use this same path for 'Baking Tips' posts 
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: Categories,
      props: true,
    },
    {
      path: '/pastries',
      name: 'pastries',
      component: Categories,
      props: true,
    },
    {
      path: '/bread',
      name: 'bread',
      component: Categories,
      props: true,
    },
    {
      path: '/keto',
      name: 'keto',
      component: Categories,
      props: true,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
