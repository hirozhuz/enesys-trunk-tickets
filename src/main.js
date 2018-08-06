import Vue from 'vue'
import router from '@/router'
import store from '@/store'

import App from '@/App.vue'

import fastClick from 'fastclick'
import 'babel-polyfill'

import '@assets/styles/reset.css'
import '@assets/plugins/bootstrap/css/bootstrap.min.css'
import '@assets/plugins/font-awesome/css/font-awesome.min.css'
import '@assets/plugins/ionicons/css/ionicons.min.css'
import '@assets/styles/ecloud.styl'

Vue.config.productionTip = false
fastClick.attach(document.body)

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next()
    } else {
        if (store.getters.isLogin) {
            next()
        } else {
            next('/')
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')