<template>
	<div id="div1">
		<h1 id="titulo">Crear Alumno</h1>
		<form v-on:submit.prevent="crearAlumno()">
			<label class="form-label">ID Alumno</label>
			<input class="form-control" type="text" v-model="alumno.idAlumno" />
			<label class="form-label">Nombre</label>
			<input class="form-control" type="text" v-model="alumno.nombre" />
			<label class="form-label">Apellidos</label>
			<input class="form-control" type="text" v-model="alumno.apellidos" />
			<label class="form-label">Imagen</label>
			<input class="form-control" type="text" v-model="alumno.imagen" />
			<label class="form-label">Activo</label>
			<input class="form-control" type="text" v-model="alumno.activo" />
			<label class="form-label">ID Curso</label>
			<input class="form-control" type="text" v-model="alumno.idCurso" />
			<br />
			<button class="btn btn-success">Crear</button>
		</form>
	</div>
</template>

<script>
import AlumnosService from "@/services/AlumnosServicio";

const service = new AlumnosService();
export default {
	name: "InsertAlumno",
	data() {
		return {
			alumno: {
				idAlumno: 0,
				nombre: "",
				apellidos: "",
				imagen: "",
				activo: 0,
				idCurso: 0,
			},
			token: "",
		};
	},
	methods: {
		crearAlumno() {
			this.token = localStorage.getItem("tokenAlumno");
			if (!this.token) {
				this.$router.push("/loginalumnos");
			} else {
				service.postAlumnosToken(this.token, this.alumno).then(result => {
					console.log(result);
					this.$router.push("/alumnos");
				});
			}
		},
	},
	mounted() {
		this.token = localStorage.getItem("tokenAlumno");
		if (!this.token) {
			this.$router.push("/loginalumnos");
		}
	},
};
</script>

<style scoped></style>
