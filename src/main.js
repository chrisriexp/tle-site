import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/app.css'
import './assets/tailwind.css'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

app.use(router);
app.use(Notifications, { name: "alert" });
app.mount('#app');
