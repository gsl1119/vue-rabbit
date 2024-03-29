import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 引入初始化的样式i文件
import "@/styles/common.scss";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
