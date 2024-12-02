import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../views/HomePage.vue") },
  { path: "/kpi", name: "KPI", component: () => import("../views/KPI.vue") },
  { path: "/curriculum-statistics", name: "Curriculum Statistics", component: () => import("../views/CurriculumStatistics.vue") },
  { path: "/research", name: "Research", component: () => import("../views/ResearchPage.vue") },
  { path: "/academic-service", name: "Academic Service", component: () => import("../views/AcademicService.vue") },
  { path: "/collaboration", name: "Collaboration", component: () => import("../views/Collaboration.vue") },
  { path: "/faculty-staff", name: "Faculty & Staff", component: () => import("../views/FacultyStaff.vue") },
  { path: "/alumni", name: "Alumni", component: () => import("../views/Alumni.vue") },
  { path: "/sdgs-impact", name: "SDGs Impact", component: () => import("../views/SDGsImpact.vue") },
  { path: "/management", name: "Management", component: () => import("../views/Management.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
