<template>
	<img v-if="cargando" src="../assets/cargando.webp" />
	<div v-else id="div1" style="display: flex">
		<div class="card" style="width: 30%; margin-right: 5%">
			<img :src="datos.equipo.imagen" class="card-img-top" alt="..." />
			<div class="card-body">
				<h3 class="card-title">{{ datos.equipo.nombre }}</h3>
				<h6 class="btn btn-outline-warning">{{ datos.equipo.champions }}</h6>
				<p class="card-text">{{ datos.equipo.descripcion }}</p>
			</div>
		</div>
		<div style="width: 70%">
			<h3>Plantilla</h3>
			<hr />
			<div style="display: flex; flex-wrap: wrap; gap: 10px">
				<div v-for="jugador in datos.jugadores" :key="jugador" class="card" style="flex-grow: 1; max-width: 150px">
					<img :src="jugador.imagen" class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">{{ jugador.nombre }}</h5>
						<p class="card-text">{{ jugador.posicion }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DatosEquipoService from "@/services/DatosEquipoService";

const service = new DatosEquipoService();
export default {
	name: "DatosEquipo",
	data() {
		return {
			datos: {
				equipo: null,
				jugadores: [],
			},
			idEquipo: "",
			cargando: true,
		};
	},
	mounted() {
		this.idEquipo = this.$route.params.idEquipo;
		Promise.all([service.getEquipoById(this.idEquipo), service.getJugadoresEquipo(this.idEquipo)]).then(([equipo, jugadores]) => {
			this.datos.equipo = equipo;
			this.datos.jugadores = jugadores;
			this.cargando = false;
		});
	},
	watch: {
		"$route.params.idEquipo"(oldVal, nextVal) {
			if (oldVal !== nextVal) {
				this.cargando = true;
				this.idEquipo = this.$route.params.idEquipo;
				Promise.all([service.getEquipoById(this.idEquipo), service.getJugadoresEquipo(this.idEquipo)]).then(([equipo, jugadores]) => {
					this.datos.equipo = equipo;
					this.datos.jugadores = jugadores;
					this.cargando = false;
				});
			}
		},
	},
};
</script>

<style scoped></style>
