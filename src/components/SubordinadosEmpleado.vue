<template>
	<div id="div1">
		<h1 id="titulo">Subordinados</h1>
		<table v-if="subordinados" class="table table-striped">
			<tr>
				<th>Apellido</th>
				<th>Oficio</th>
				<th>Salario</th>
			</tr>
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
		};
	},
	mounted() {
		let token = localStorage.getItem("token");
		if (token.length == 0) {
			this.$router.push("/login");
		}
		service.getSubordinados(token).then(result => {
			this.subordinados = result;
		});
	},
};
</script>

<style scoped></style>
