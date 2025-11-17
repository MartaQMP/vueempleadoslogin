import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PerfilEmpleado from "./components/PerfilEmpleado.vue";
import SubordinadosEmpleado from "./components/SubordinadosEmpleado.vue";
import InicioSesion from "./components/InicioSesion.vue";
import SubirArchivo from "./components/SubirArchivo.vue";
import DatosEquipo from "./components/DatosEquipo.vue";
import JugadoresNombre from "./components/JugadoresNombre.vue";
import InicioSesionAlumno from "./components/InicioSesionAlumno.vue";
import AlumnosComponent from "./components/AlumnosComponent.vue";
import InsertAlumno from "./components/InsertAlumno.vue";

const myRoutes = [
	{ path: "/", component: HomeComponent },
	{ path: "/perfil", component: PerfilEmpleado },
	{ path: "/subordinados", component: SubordinadosEmpleado },
	{ path: "/login", component: InicioSesion },
	{ path: "/subirarchivo", component: SubirArchivo },
	{ path: "/loginalumnos", component: InicioSesionAlumno },
	{ path: "/alumnos", component: AlumnosComponent },
	{ path: "/crearalumno", component: InsertAlumno },
	{ path: "/datosequipo/:idEquipo", component: DatosEquipo },
	{ path: "/buscarjugadores/:nombre", component: JugadoresNombre },
];

const router = createRouter({
	history: createWebHistory(),
	routes: myRoutes,
});

export default router;
