import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createAppRouter } from '@/Presentation/view/router';
import App from '@/App.vue';
import '@/Presentation/view/scss/main.scss';
import { mapUsecase } from '@/Presentation/usecaseMap';

const app = createApp(App);

app.use(createPinia());

const router = createAppRouter();
app.use(router);

router.isReady().then(async () => {
    const appStartedUsecase = mapUsecase('AppStartedUsecase');

    await appStartedUsecase();

    app.mount('#app');
});
