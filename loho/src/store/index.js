import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
<<<<<<< HEAD
import details from "./details";
=======
import shop from "./shop"
>>>>>>> b55413b39021f0feec3f395a55e832663e087dc8
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};


const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        home,
<<<<<<< HEAD
		details
=======
		shop
>>>>>>> b55413b39021f0feec3f395a55e832663e087dc8
    }
})

export default store;