const routes = [
  {
    path: "/auth",
    component: () => import("src/layouts/mainUserLay.vue"),
    children: [
      { path: "/auth/user", component: () => import("pages/userPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("src/layouts/mainLay.vue"),
    children: [{ path: "/", component: () => import("pages/helloPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
