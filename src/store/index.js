import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth } from "./acount";
import { createCard } from "./createCard";
import { cardFolder } from "./cardFolder";
import { cardPool } from "./cardPool";
import { quiz } from "./quiz";
import { test } from "./test";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        createCard,
        cardFolder,
        cardPool,
        quiz,
        test,
    },
    plugins: [
        createPersistedState({
            paths: ['test'],
        }),
    ],
});