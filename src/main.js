import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "popper.js";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const store = createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    role: null,
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
    },
    setRole(state, role) {
      state.role = role;
    },
  },
});

const app = createApp(App).use(router).use(store);
app.config.globalProperties.$toastr = toastr;
app.mount("#app");
