<template>
    <div class="container">
         <div class="row">
            <div class="row g-1">
                <div class="col-md-6">
                <div style="margin-top: 50px; border: solid 1px; background-color:antiquewhite">
                <h1>Total Customers</h1>
                <h2>{{totalCustomer}}</h2>
                </div>
                </div>
                <div class="col-md-6">
                <div style="margin-top: 50px; border: solid 1px; background-color:rgb(166, 206, 22)" >
                <h1>Active Customers</h1>
                <h2>{{activeCustomer}}</h2>
                </div>
                </div>
        </div>
        </div>
        <div class="container">
         <div class="row">
         <div class="row g-1">
         <div class="col-md-6">
            <div style="margin-top: 50px"> 
            <h1  style="text-align:left">Total Customer</h1>
            </div>
            </div>
            <div class="col-md-6">
            <div style="margin-top: 65px; text-align: right"> 
              <router-link to="/add-customer"><button type="button" class="btn btn-primary">+ New Customer</button></router-link>
            </div>
            </div>
        </div>
         </div>
        </div>
        
        <table class="table table-striped">
            <thead>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contact E-Mail</th>
                <th>Customer Status</th>
                <th colspan="2">Actions</th>
            </thead>
            <tbody>
                <tr v-for="customer in customers" v-bind:key = "customer.id">
                    <td> {{customer.company}}</td>
                    <td> {{customer.firstName}} {{customer.lastName}}</td>
                    <td> {{customer.email}}</td>
                    <td v-if="customer.status"><font-awesome-icon icon="bookmark" /></td>
                     <td v-else-if="!customer.status"><font-awesome-icon icon="user-slash" /></td>
                    <td><router-link :to="'/editCustomer/' + customer.id"><font-awesome-icon icon="pen" /></router-link></td>
                     <td><font-awesome-icon icon="trash"  @click="deleteCus(customer.id)"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CustomerService from "@/service/CustomerService"
    export default {
    _name: "Customers",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    data() {
        return {
            customers: [],
            totalCustomer: "",
            activeCustomer: "",
        };
    },
    methods: {
        getCustomers() {
            CustomerService.getCustomer().then((response) => {
                this.customers = response.data;
            });
        },
        getCount() {
            CustomerService.getCountAll().then((response) => {
                this.totalCustomer = response.data;
            });
        },
        getCountAct() {
            CustomerService.getCountActive().then((response) => {
                this.activeCustomer = response.data;
            });
        },
        deleteCus(id){
            CustomerService.deleteCustomer(id).then(() => {
                console.log("Ok")
                this.getCustomers();
                this.getCount();
                this.getCountAct();
            })
        },
    },
    created() {
        this.getCustomers();
        this.getCount();
        this.getCountAct();
    },

}
</script>

