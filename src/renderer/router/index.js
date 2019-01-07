import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview'

Vue.use(Router)
Vue.use(iView)

var router = new Router({
  routes: [
    {
      path: '/', redirect: '/library'
    },
    {
      path: '/library',
      name: 'library',
      components: {
        default: require('@/components/DocumentView').default,
        sidepanel: require('@/components/LibraryPanel').default,
        content: require('@/components/ReaderView').default
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: require('@/components/ReaderView').default,
        content: require('@/components/ReaderView').default
      }
    },
    {
      path: '/setting',
      name: 'setting',
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
