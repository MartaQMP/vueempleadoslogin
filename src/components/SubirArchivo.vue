<template>
	<div id="div1">
		<h1 id="titulo">Subir archivo</h1>
		<br />
		<form v-on:submit.prevent="subirArchivo()">
			<input type="file" class="form-control" @change="cogerFichero($event)" />
			<br />
			<button class="btn btn-success">Subir Archivo</button>
		</form>
	</div>
</template>

<script>
import FicheroService from "@/services/FicheroServicio";

const service = new FicheroService();
export default {
	name: "SubirArchivo",
	data() {
		return {
			fichero: {
				fileName: "",
				fileContent: "",
			},
			inputFichero: null,
		};
	},
	methods: {
		cogerFichero(event) {
			this.inputFichero = event.target.files[0];
			this.fichero.fileName = this.inputFichero.name;
		},
		subirArchivo() {
			let reader = new FileReader();
			reader.readAsDataURL(this.inputFichero);
			reader.onload = () => {
				let base64 = reader.result.split(",")[1];
				this.fichero.fileContent = base64;
				service.portFichero(this.fichero).then(result => {
					console.log("Subido: " + result);
				});
			};
		},
	},
};
</script>

<style scoped></style>
