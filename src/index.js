import Vue from 'vue'
import Vegetaux from './components/Vegetaux.vue'
import VegetauxDetail from './components/VegetauxDetail.vue'
import Movie from './components/Movie.vue'
import Nav from './components/Nav.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);

export let router = new VueRouter();


// Set up routing and match routes to components
router.map({
    '/vegetaux': {
        component: Vegetaux
    },
    '/:id': {
        component: VegetauxDetail
    },
    '/movie': {
        component: Movie
    }
});

// Redirect to the home route if any routes are unmatched
router.redirect({
    '*': '/vegetaux'
});

// Start the app on the #app div
router.start(Nav, '#app');