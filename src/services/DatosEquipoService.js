import { Global } from "@/Global";
import axios from "axios";

export default class DatosEquipoService {
	getEquipos() {
		return new Promise(function (resolve) {
			let request = "api/equipos";
			axios.get(Global.urlEquipos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	getJugadoresEquipo(idEquipo) {
		return new Promise(function (resolve) {
			let request = "api/jugadores/jugadoresequipos/" + idEquipo;
			axios.get(Global.urlEquipos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	getEquipoById(idEquipo) {
		return new Promise(function (resolve) {
			let request = "api/equipos/" + idEquipo;
			axios.get(Global.urlEquipos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	buscarJugadorNombre(nombre) {
		return new Promise(function (resolve) {
			let request = "api/jugadores/buscarjugadores/" + nombre;
			axios.get(Global.urlEquipos + request).then(response => {
				resolve(response.data);
			});
		});
	}
}
