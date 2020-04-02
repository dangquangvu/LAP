import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Action from "../views/Action.vue";
import LoginPage from "../login.vue";
import RegisterPage from "../register.vue";
// import CardId from ""

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    // children: [{
    //     path: '/card/:id',
    //     component: cardId
    // }, ]
  },
  {
    path: "/action",
    name: "action",
    component: Action
  },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
];

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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
