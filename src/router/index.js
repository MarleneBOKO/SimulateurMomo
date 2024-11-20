import { createRouter, createWebHistory } from "vue-router";
import Retraits from "../components/Retrais.vue";
import TransferFees from "../components/TransferFees.vue";
import MomoSaayaa from "../components/MomoSaayaa.vue";

const routes = [
  {
    path: "/",
    name: "Retraits",
    component: Retraits,
  },
  {
    path: "/transfer-fees",
    name: "TransferFees",
    component: TransferFees,
  },
  {
    path: "/momo-saayaa",
    name: "MomoSaayaa",
    component: MomoSaayaa,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
