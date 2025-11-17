<template>
	<div id="div1">
		<h1 id="titulo">Inicio Sesion Alumno</h1>
		<form v-on:submit.prevent="crearToken()">
			<label class="form-label">Usuario</label>
			<input class="form-control" type="text" v-model="alumno.userName" />
			<label class="form-label">Password</label>
			<input class="form-control" type="text" v-model="alumno.password" />
			<br />
			<button class="btn btn-success">Iniciar Sesion</button>
		</form>
	</div>
</template>

<script>
import AlumnosService from "@/services/AlumnosServicio";

const service = new AlumnosService();
export default {
	name: "InicioSesionAlumno",
	data() {
		return {
			alumno: {
				userName: "",
				password: "",
			},
		};
	},
	methods: {
		crearToken() {
			service.generarToken(this.alumno).then(() => {
				this.$router.push("/");
			});
		},
	},
};
</script>

<style scoped></style>
