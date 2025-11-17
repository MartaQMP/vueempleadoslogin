<template>
	<div>
		<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
			<div class="container-fluid">
				<img src="../assets/batman.png" style="width: 75px" />
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/login">Inicio Sesion</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/perfil">Perfil</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/subordinados">Subordinados</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/subirarchivo">Subir Archivo</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/loginalumnos">Inicio Sesion Alumnos</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/alumnos">Alumnos</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/crearalumno">Crear Alumno</router-link>
						</li>
						<li class="nav-item dropdown">
							<p class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Equipos</p>
							<ul class="dropdown-menu">
								<li v-for="equipo of equipos" :key="equipo">
									<router-link class="dropdown-item" :to="'/datosequipo/' + equipo.idEquipo">{{ equipo.nombre }}</router-link>
								</li>
							</ul>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="nombreABuscar" />
						<button @click="mandarABuscar()" class="btn btn-outline-success" type="submit">Buscar</button>
					</form>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import DatosEquipoService from "@/services/DatosEquipoService";

const service = new DatosEquipoService();
export default {
	name: "MenuComponent",
	data() {
		return {
			equipos: [],
			nombreABuscar: "",
			jugadores: [],
		};
	},
	mounted() {
		service.getEquipos().then(result => {
			this.equipos = result;
		});
	},
	methods: {
		mandarABuscar() {
			this.$router.push("/buscarjugadores/" + this.nombreABuscar);
		},
	},
};
</script>

<style lang="scss" scoped></style>
