import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'document-list',
      components: {
        default: require('@/components/DocumentList').default,
        content: require('@/components/DocumentList').default
      }
    },
    {
      path: '/landingpage',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
