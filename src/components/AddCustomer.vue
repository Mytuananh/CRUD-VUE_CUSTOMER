<template>
<div class="container">
    <div class="row">
        <div style="margin-top: 50px; border: solid 3px" >
 <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" placeholder="First name..." required v-model="Customer.firstName">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" placeholder="Last name..." required v-model="Customer.lastName">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomEmail" class="form-label">Email</label>
    <div class="input-group has-validation">
      <input type="email" class="form-control" id="validationCustomEmail" aria-describedby="inputGroupPrepend" required v-model="Customer.email">
      <div class="invalid-feedback">
        Please fill a email.
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom03" class="form-label">Company</label>
    <input type="text" class="form-control" id="validationCustom03" required v-model="Customer.company">
    <div class="invalid-feedback">
      Please provide a valid company.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" @click="handleSubmit()">Create</button>
  </div>
</form>
        </div>
    </div>
</div>
</template>

<script>
import CustomerService from "@/service/CustomerService"
export default {
    name: 'AddCustomer',
    data() {
      return {
          Customer: {
            company: "",
            firstName: "",
            lastName: "",
            email: "",
          }
      }
    },
    methods: {
        handleSubmit() {
             CustomerService.addNewCus(this.Customer).then(() => {
             console.log("Ok")
         }) 
        }
    }
}

</script>

<style>

</style>