import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "popper.js";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import store from "./store";

const app = createApp(App).use(router).use(store);
app.config.globalProperties.$toastr = toastr;
app.mount("#app");
