<template>
	<div id="div1">
		<h1 id="titulo">Perfil</h1>
		<div class="card" v-if="empleado">
			<div class="card-header">{{ empleado.apellido }}</div>
			<div class="card-body">
				<p class="card-text">
					Oficio:
					{{ empleado.oficio }}
				</p>
				<p class="card-text">
					Director:
					{{ empleado.director }}
				</p>
				<p class="card-text">Salario: {{ empleado.salario }} €</p>
			</div>
		</div>
	</div>
</template>

<script>
import EmpleadosService from "@/services/EmpleadosService";

const service = new EmpleadosService();
export default {
	name: "PerfilEmpleado",
	data() {
		return {
			empleado: null,
			token: "",
		};
	},
	mounted() {
		this.token = localStorage.getItem("token");
		if (!this.token) {
			this.$router.push("/login");
		} else {
			service.getPerfil(this.token).then(result => {
				this.empleado = result;
			});
		}
	},
};
</script>

<style scoped></style>
