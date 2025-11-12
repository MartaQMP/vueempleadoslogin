<template>
	<div id="div1">
		<h1 id="titulo">Perfil</h1>
        <div class="card" v-if="empleado">
        <div class="card-header">{{ perfil.apellido }}</div>
        <div class="card-body">
            <p class="card-text">
                Oficio:
                {{ perfil.oficio }}
            </p><p class="card-text">
                Director:
                {{ perfil.director }}
            </p>
            <p class="card-text">Salario: {{ perfil.salario }} €</p>
        </div>
    </div>
	</div>
</template>

<script>
import EmpleadosService from '@/services/EmpleadosService';

const service = new EmpleadosService()
export default {
	name: "PerfilEmpleado",
    data() {
		return {
			empleado: null,
		};
	},
	mounted() {
		let token = localStorage.getItem("token");
		if (token == null) {
			this.$router.push("/login");
		}
		service.getPerfil(token).then(result => {
			this.empleado = result;
		});
	},
};
</script>

<style scoped></style>
