import Vue from 'vue'
import VueRouter from 'vue-router'
import Contenedor from '../views/Contenedor.vue'
import Login from '../views/Login.vue'
import Visualizar from '../views/Visualizar.vue'

import Trabajadores from '../components/Panel/Trabajadores.vue'
import Parentescos from '../components/Panel/Parentescos.vue'
import Puestos from '../components/Panel/Puestos.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
}, {
    path: '/Panel',
    name: 'Contenedor',
    component: Contenedor,
    //redirect: 'Trabajadores',
    children: [{
        path: '/Panel/Trabajadores',
        name: 'Trabajadores',
        component: Trabajadores
    }, {
        path: '/Panel/Parentescos',
        name: 'Parentescos',
        component: Parentescos
    }, {
        path: '/Panel/Puestos',
        name: 'Puestos',
        component: Puestos
    }]
}, {
    path: '/Visualizar/:id',
    name: 'Visualizar',
    component: Visualizar,
}]

const router = new VueRouter({
    routes
})

export default router