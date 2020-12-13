const pages = [
    {
        path: '/root',
        name: 'root',
        component: () => import('@/pages/root.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home/index.vue')
    }
]

export default pages