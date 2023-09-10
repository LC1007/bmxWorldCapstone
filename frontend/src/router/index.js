import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies';

const {cookies} = useCookies()
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    beforeEnter: () => {
      if (!cookies.get("loggedInUser")) {
        router.push({ name: "signup" });
      }
    },
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/product/:bmxID",
    name: "product",
    component: () => import("../views/SingleView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
    beforeEnter: () => {
      if (!cookies.get("loggedInUser")) {
        router.push({ name: "login" });
      }
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/AdminTest.vue"),
  },
  {
    path: "/createprod",
    name: "createprod",
    component: () => import("../components/CreateProdComp.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
