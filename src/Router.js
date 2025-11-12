import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PerfilEmpleado from "./components/PerfilEmpleado.vue";
import SubordinadosEmpleado from "./components/SubordinadosEmpleado.vue";
import InicioSesion from "./components/InicioSesion.vue";

const myRoutes = [
	{ path: "/", component: HomeComponent },
	{ path: "/perfil", component: PerfilEmpleado },
	{ path: "/subordinados", component: SubordinadosEmpleado },
	{ path: "/login", component: InicioSesion },
];

const router = createRouter({
	history: createWebHistory(),
	routes: myRoutes,
});

export default router;
