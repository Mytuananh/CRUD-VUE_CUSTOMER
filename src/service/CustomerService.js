import axios from 'axios'

const CUSTOMER_API_URL_SHOW_ALL = 'http://localhost:8080/list';
const TOTAL_CUSTOMER_ALL = 'http://localhost:8080/count';
const TOTAL_CUSTOMER_ACTIVE = 'http://localhost:8080/active';
const ADD_NEW_CUSTOMER = 'http://localhost:8080/save';
const EDIT_OLD_CUSTOMER = 'http://localhost:8080/';

class CustomerService {
    getCustomer(){
        return axios.get(CUSTOMER_API_URL_SHOW_ALL);
    }

    getCountAll() {
        return axios.get(TOTAL_CUSTOMER_ALL);
    }

    getCountActive() {
        return axios.get(TOTAL_CUSTOMER_ACTIVE);
    }

    addNewCus(customer) {
        return axios.post(ADD_NEW_CUSTOMER, customer);
    }

    editCus(id, customer) {
        return axios.put(EDIT_OLD_CUSTOMER + id, customer);
    }

    deleteCustomer(id) {
        return axios.delete(EDIT_OLD_CUSTOMER + id)
    }

    getDetailCustomer(id) {
        return axios.get(EDIT_OLD_CUSTOMER + id)
    }


}

export default new CustomerService()