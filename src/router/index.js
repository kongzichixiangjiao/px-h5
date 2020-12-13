import Vue from 'vue'
import Router from 'vue-router'
import pages from './page.js'
import notFound from './notFound.js'

Vue.use(Router);



const router = new Router({
    routes: [...pages, notFound]
})

// router.beforeEach((to, from, next) => {
//     console.log(to, from, next());
// })

export default router;