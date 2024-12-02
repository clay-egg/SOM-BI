import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../views/HomePage.vue") },
  { path: "/kpi", name: "KPI", component: () => import("../views/KPIPage.vue") },
  { path: "/curriculum-statistics", name: "Curriculum Statistics", component: () => import("../views/CurriculumStatistics.vue") },
  { path: "/research", name: "Research", component: () => import("../views/ResearchPage.vue") },
  { path: "/academic-service", name: "Academic Service", component: () => import("../views/AcademicService.vue") },
  { path: "/collaboration", name: "Collaboration", component: () => import("../views/CollaborationPage.vue") },
  { path: "/faculty-staff", name: "Faculty & Staff", component: () => import("../views/FacultyStaff.vue") },
  { path: "/alumni", name: "Alumni", component: () => import("../views/AlumniPage.vue") },
  { path: "/sdgs-impact", name: "SDGs Impact", component: () => import("../views/SDGsImpactPage.vue") },
  { path: "/management", name: "Management", component: () => import("../views/ManagementPage.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
