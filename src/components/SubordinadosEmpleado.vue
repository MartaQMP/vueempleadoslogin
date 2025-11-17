<template>
	<div id="div1">
		<h1 id="titulo">Subordinados</h1>
		<table v-if="subordinados" class="table table-striped">
			<thead>
				<tr>
					<th>Apellido</th>
					<th>Oficio</th>
					<th>Salario</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="sub in subordinados" :key="sub">
					<td>{{ sub.apellido }}</td>
					<td>{{ sub.oficio }}</td>
					<td>{{ sub.salario }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import EmpleadosService from "@/services/EmpleadosService";

const service = new EmpleadosService();
export default {
	name: "SubordinadosEmpleado",
	data() {
		return {
			subordinados: [],
			token: "",
		};
	},
	mounted() {
		this.token = localStorage.getItem("token");
		if (!this.token) {
			this.$router.push("/login");
			console.log("Salir");
		} else {
			console.log("Entrar")
			service.getSubordinados(this.token).then(result => {
				this.subordinados = result;
			});
		}
	},
};
</script>

<style scoped></style>
