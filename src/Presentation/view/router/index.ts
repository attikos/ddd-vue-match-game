import PageHome from '@/Presentation/view/components/PageHome.vue';
import { createRouter, createWebHashHistory } from 'vue-router'

export const createAppRouter = () => {
    const routes = [{ path: '/', component: PageHome }];

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    return router;
}
