import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/]
new Vue({
    router: router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");