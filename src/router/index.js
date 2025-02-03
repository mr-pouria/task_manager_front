import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";
import {useStore} from "@/pinia";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView,
        meta: {Auth: true}
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {noAuth: true}
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const store = useStore()
    if (to.meta.Auth && !store.isAuthenticated) {
        next("/login")
    } else if (to.meta.noAuth && store.isAuthenticated) {
        next("/")
    } else {
        next()
    }
})

export default router
