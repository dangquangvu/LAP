import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./acount";
import { createCard } from "./createCard";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        createCard
    }
});