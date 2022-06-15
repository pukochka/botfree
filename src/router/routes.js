const routes = [
  {
    path: "/auth",
    component: () => import("src/layouts/UserLay.vue"),
    children: [
      { path: "/auth", component: () => import("pages/userPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("src/layouts/AuthLay.vue"),
    children: [
      { path: "/", component: () => import("src/pages/authPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
