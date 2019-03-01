import Vue from "vue";
import Vuex from "vuex";
import home from "./home";


import details from "./details";





import city from "./city";
import shop from "./shop"

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
	modules: {
		home,
		details,
		shop,
		city

	}



})

export default store;
