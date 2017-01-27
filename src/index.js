import Vue from 'vue'
import Chuck from './components/Chuck.vue'
import Vegetaux from './components/Vegetaux.vue'
import Nav from './components/Nav.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import auth from './auth'
Vue.use(VueResource);
Vue.use(VueRouter);

export let router = new VueRouter();

auth.checkAuth()

// Set up routing and match routes to components
router.map({
    '/chuck': {
        component: Chuck
    },
    '/vegetaux': {
        component: Vegetaux
    }
});

// Redirect to the home route if any routes are unmatched
router.redirect({
    '*': '/chuck'
});

// Start the app on the #app div
router.start(Nav, '#app');