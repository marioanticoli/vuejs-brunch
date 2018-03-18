import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from './store';

import AppTemplate from './template'
import Home from './pages/home'
import Products from './pages/products'
import AboutUs from './pages/aboutus'
import ContactUs from './pages/contactus'

Vue.use(VueRouter)

Vue.config.productionTip = true

const routes = [
	{ path: '/home', alias: '/', component: Home },
	{ path: '/products', component: Products },
	{ path: '/about-us', component: AboutUs },
	{ path: '/contact-us', component: ContactUs },
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	el: '#app',
	router,
	// store,
	render: h => h(AppTemplate)
})
