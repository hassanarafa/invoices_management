// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import LoginPage from '@/components/HelloWorld.vue'
import MainLayout from '@/components/MainLayout.vue'
import InvoicesView from '@/components/InvoicesPage.vue'
import CustomersView from '@/components/CustomersView.vue'
import HomePage from "@/components/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: HomePage
            },
            {
                path: 'customers',
                name: 'Customers',
                component: CustomersView
            },
            {
                path: 'invoices',
                name: 'Invoices',
                component: InvoicesView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
