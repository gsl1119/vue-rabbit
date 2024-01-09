// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "/category",
          component: () => import("@/views/Category/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login/index.vue"),
    },
  ],
});

export default router;
