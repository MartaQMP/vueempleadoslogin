import { Global } from "@/Global";
import axios from "axios";

export default class AlumnosService {
	generarToken(alumno) {
		return new Promise(function () {
			let request = "api/auth/login";
			axios.post(Global.urlAlumnos + request, alumno).then(response => {
				localStorage.clear();
				localStorage.setItem("tokenAlumno", response.data.response);
			});
		});
	}

	getAlumnosToken(token) {
		return new Promise(function (resolve) {
			let request = "api/alumnos/alumnostoken";
			axios
				.get(Global.urlAlumnos + request, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	}

	getCursosToken(token) {
		return new Promise(function (resolve) {
			let request = "api/alumnos/cursostoken";
			axios
				.get(Global.urlAlumnos + request, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	}

	postAlumnosToken(token, alumno) {
		return new Promise(function (resolve) {
			let request = "api/alumnos/insertalumnotoken";
			axios
				.post(Global.urlAlumnos + request, alumno, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response);
				});
		});
	}
}
