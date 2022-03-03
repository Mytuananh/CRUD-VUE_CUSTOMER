import { createRouter, createWebHistory } from 'vue-router';

import AddCustomer from '../components/AddCustomer.vue';
import EditCustomer from '../components/EditCustomer.vue';
import Customer from '@/components/Customer.vue';

const routes = [
    {path: '/add-customer', component: AddCustomer},
    {path: '/editCustomer/:id', name: "editCustomer", component: EditCustomer},
    {path: '/customer', name: Customer, component: Customer}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router