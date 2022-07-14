const routes = [
  {
    path: "/auth",
    component: () => import("src/layouts/UserLay.vue"),
    children: [
      { path: "/auth", component: () => import("src/pages/UserPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("src/layouts/AuthLay.vue"),
    children: [
      { path: "/", component: () => import("src/pages/AuthPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/404.vue"),
  },
];

export default routes;
