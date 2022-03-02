import { createRouter, createWebHistory } from 'vue-router';

import AddCustomer from '../components/AddCustomer.vue';
import EditCustomer from '../components/EditCustomer.vue';

const routes = [
    {path: '/add-customer', component: AddCustomer},
    {path: '/editCustomer/:id', name: "editCustomer", component: EditCustomer}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router