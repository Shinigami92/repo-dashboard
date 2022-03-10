import AppMainLayout from '@/pages/AppMainLayout.vue';
import type { Router, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppMainLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/AppDashboard.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'dashboard',
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
