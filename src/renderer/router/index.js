import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview'

Vue.use(Router)
Vue.use(iView)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'all-documents',
      components: {
        default: require('@/components/AllDocuments').default,
        content: require('@/components/AllDocuments').default
      }
    },
    {
      path: '/reader',
      name: 'reader',
      components: {
        default: require('@/components/AllDocuments').default,
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
