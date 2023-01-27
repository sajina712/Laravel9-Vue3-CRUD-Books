import './bootstrap';

import Vue from 'vue'
//window.Vue = vue;

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import { createApp } from "vue";

import axios from 'axios';
import {routes} from './routes';
//import { createRouter, createWebHistory } from 'vue-router'
import {createRouter, createWebHashHistory} from "vue-router";

 
//Vue.use(VueRouter);
//Vue.use(VueAxios, axios);

const router=createRouter ({
    history: createWebHashHistory(),
    routes,
})


const app = createApp({});



app.use(router)
app.use(VueAxios, axios) // 👈
app.mount('#app')

