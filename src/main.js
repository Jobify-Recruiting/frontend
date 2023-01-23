import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
library.add(faArrowRight);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

app.config.globalProperties.$favorite_list = [];
app.config.globalProperties.$favorite_list2 = [];
app.config.globalProperties.$favorite_list_length = app.config.globalProperties.$favorite_list2.length;
