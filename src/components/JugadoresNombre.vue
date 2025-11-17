<template>
	<div id="div1">
		<h1 id="titulo">Jugadores por {{ nombre }}</h1>
		<div style="display: flex; flex-wrap: wrap; gap: 10px">
			<div v-for="jugador in jugadores" :key="jugador" class="card" style="flex-grow: 1; max-width: 150px">
				<img :src="jugador.imagen" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ jugador.nombre }}</h5>
					<p class="card-text">{{ jugador.posicion }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DatosEquipoService from "@/services/DatosEquipoService";

const service = new DatosEquipoService();
export default {
	name: "JugadoresNombre",
	data() {
		return {
			jugadores: [],
			nombre: "",
		};
	},
	mounted() {
		this.nombre = this.$route.params.nombre;
		service.buscarJugadorNombre(this.nombre).then(result => {
			this.jugadores = result;
		});
	},
};
</script>

<style scoped></style>
