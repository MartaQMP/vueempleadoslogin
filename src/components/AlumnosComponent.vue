<template>
	<div id="div1">
		<h1 id="titulo">Alumnos</h1>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>ID Alumno</th>
					<th>Nombre</th>
					<th>Apellidos</th>
					<th>ID Curso</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="alumno of alumnos" :key="alumno">
					<td>{{ alumno.idAlumno }}</td>
					<td>{{ alumno.nombre }}</td>
					<td>{{ alumno.apellidos }}</td>
					<td>{{ alumno.idCurso }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import AlumnosService from "@/services/AlumnosServicio";

const service = new AlumnosService();
export default {
	name: "AlumnosComponent",
	data() {
		return {
			alumnos: [],
			token: "",
		};
	},
	mounted() {
		this.token = localStorage.getItem("tokenAlumno");
		if (!this.token) {
			this.$router.push("/loginalumnos");
		} else {
			service.getAlumnosToken(this.token).then(result => {
				this.alumnos = result;
			});
		}
	},
};
</script>

<style lang="scss" scoped></style>
