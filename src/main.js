import "../public/static/css/global.css";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import userInfo from "./utils/userInfo";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
//使用icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store);
app.use(router);
app.use(ElementPlus).mount("#app");
