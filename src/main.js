import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
// css
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // For Bootstrap CSS
import "bootstrap"; // For Bootstrap JavaScript components

const pinia = createPinia();
createApp(App).use(pinia).mount("#app");
