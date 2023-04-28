import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Education.vue"),
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("../views/Work.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
