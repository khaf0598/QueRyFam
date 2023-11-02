import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'

Vue.config.productionTip = false

let token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token;
}

axios.defaults.baseURL = 'https://aavisor.azurewebsites.net/api';
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

axios.defaults.transformRequest = [(data) => {
    return JSON.stringify(data);
}];




axios.interceptors.request.use(config => {
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
});

Vue.prototype.$http = axios;