import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth } from "./acount";
import { createCard } from "./createCard";
import { cardFolder } from "./cardFolder";
import { cardPool } from "./cardPool";
import { quiz } from "./quiz";
import { test } from "./test";
import * as Cookies from 'js-cookie'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        createCard,
        cardFolder,
        cardPool,
        quiz,
        test: test,
    },
    plugins: [
        createPersistedState({
            paths: ['test'],
            storage: {
                getState: (key) => Cookies.getJSON(key),
                setItem: (key, value) => Cookies.set(key, value, { expires: new Date(new Date().getTime() + 1 * 60 * 1000), secure: true }),
                removeItem: key => Cookies.remove(key),
            },
        }),
    ],
});