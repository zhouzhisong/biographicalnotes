import "../public/static/css/global.css";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import userInfo from "./utils/userInfo";
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
