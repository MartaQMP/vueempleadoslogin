<template>
	<div id="div1">
		<h1 id="titulo">Inicio Sesion</h1>
		<form v-on:submit.prevent="hacerLogin()">
			<label class="form-label">Username:</label>
			<input class="form-control" type="text" v-model="user.userName" />
			<label class="form-label">Password:</label>
			<input class="form-control" type="text" v-model="user.password" />
			<br />
			<button class="btn btn-warning">Crear</button>
		</form>
	</div>
</template>

<script>
import EmpleadosService from "@/services/EmpleadosService";

const service = new EmpleadosService();
export default {
	name: "InicioSesion",
	data() {
		return {
			user: {
				userName: "",
				password: "",
			},
		};
	},
	methods: {
		hacerLogin() {
			service.crearToken(this.user).then(() => {
				this.$route.push("/");
			});
		},
	},
};
</script>

<style lang="scss" scoped></style>
