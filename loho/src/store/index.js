import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
<<<<<<< HEAD

import details from "./details";

import shop from "./shop"

=======
import details from "./details";
import city from "./city";
import shop from "./shop"
>>>>>>> maliangbo
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};


const store = new Vuex.Store({
<<<<<<< HEAD
    state,
    actions,
    getters,
    mutations,
    modules:{
        home,

		details,

		shop

    }
=======
	state,
	actions,
	getters,
	mutations,
	modules: {
		home,
		details,
		shop,
		city
	}
>>>>>>> maliangbo
})

export default store;
