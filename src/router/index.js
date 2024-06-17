import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Index from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      meta: { guestOnly: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }, // To protect the route from unauthorized access
    },
  ],
});

router.beforeEach((to, from, next) => {
  // If the user is trying to access the home page while not logged in
  if (to.name === "home" && !store.state.isLoggedIn) {
    // Redirect them to the index page
    next({ name: "index" });
  } else if (
    // If the user is logged in and tries to access the index or login page
    (to.name === "index" || to.name === "login") &&
    store.state.isLoggedIn
  ) {
    // Redirect them to the home page
    next({ name: "home" });
  } else {
    // Otherwise, allow them to proceed
    next();
  }
});

export default router;
