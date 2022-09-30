import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, Pinia } from "pinia";

const pinia: Pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
