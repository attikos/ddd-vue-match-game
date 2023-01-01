import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createAppRouter } from '@/Presentation/view/router';
import App from './App.vue';
import '@/Presentation/view/scss/main.scss';

const app = createApp(App);

app.use(createPinia());

const router = createAppRouter();
app.use(router);

router.isReady().then(() => {
    app.mount('#app');
});
