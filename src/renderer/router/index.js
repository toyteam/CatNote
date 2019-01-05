import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview'

Vue.use(Router)
Vue.use(iView)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'document-view',
      components: {
        default: require('@/components/DocumentView').default,
        content: require('@/components/DocumentView').default
      }
    },
    {
      path: '/reader',
      name: 'reader',
      components: {
        default: require('@/components/ReaderView').default,
        content: require('@/components/ReaderView').default
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

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
