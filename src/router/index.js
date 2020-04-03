import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mainpage from "../components/Mainpage.vue";
import Action from "../views/Action.vue";
import LoginPage from "../views/login.vue";
import Dashboard from "../views/Dashboard.vue";
// import App from "../App.vue";
import RegisterPage from "../views/register.vue";
// import CardId from ""

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Mainpage",
  //   component: Mainpage
  //   // children: [{
  //   //     path: '/card/:id',
  //   //     component: cardId
  //   // }, ]
  // },

  {
    path: "/dashboard",
    name: "main",
    component: Dashboard
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/home/main",
        component: Mainpage
      },
      {
        path: "/home/action",
        name: "action",
        component: Action
      }
    ]
  },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: '*', redirect: '/dashboard' }
];

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/login", "/register"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }

//   next();
// });

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
