const routes = [
  {
    path: "/",
    component: () => import("src/layouts/UserLay.vue"),
    children: [
      { path: "/", component: () => import("src/pages/UserPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/404.vue"),
  },
];

export default routes;
