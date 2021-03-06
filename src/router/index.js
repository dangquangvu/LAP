import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Action from "../views/Action.vue";
import LoginPage from "../views/login.vue";
import Dashboard from "../views/Dashboard.vue";
import Mainpage from "../components/Mainpage.vue";
import CreateCard from "../components/CreateCard";
import RegisterPage from "../views/register.vue";
import CardId from "../views/CardId.vue"
import leanCard from "../views/leanCard"
import testCard from "../views/test.vue"
import SearchScreen from "../views/SearchScreen.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: "history",
    routes: [{
            path: "/dashboard",
            name: "main",
            component: Dashboard,
        },
        {
            path: "/card/:id?",
            component: CardId,
        },
        {
            path: "/leanCard/:id?",
            component: leanCard,
        },
        {
            path: "/test/:id?",
            component: testCard,
        },
        {
            path: "/search/:text?",
            component: SearchScreen,
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            children: [{
                    path: "/home/main",
                    component: Mainpage,
                },
                {
                    path: "/home/action",
                    name: "action",
                    component: Action,
                },
                {
                    path: "/home/create_card",
                    name: "create card",
                    component: CreateCard,
                },
            ],
        },
        { path: "/login", component: LoginPage, meta: { authRequired: true } },
        { path: "/register", component: RegisterPage },
        { path: "*", redirect: "/dashboard" },
        // { path: "/home", redirect: "/home/main" },
    ],
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/login", "/register"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");

    if (authRequired && !loggedIn) {
        return next("/login");
    }

    next();
});
export default router;