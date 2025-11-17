import { Global } from "@/Global";
import axios from "axios";

export default class EmpleadosService {
	getSubordinados(token) {
		return new Promise(function (resolve) {
			let request = "api/empleados/subordinados";
			axios
				.get(Global.urlEmpleados + request, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	}

	getPerfil(token) {
		return new Promise(function (resolve) {
			let request = "api/empleados/perfilempleado";
			axios
				.get(Global.urlEmpleados + request, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	}

	crearToken(login) {
		return new Promise(function () {
			let request = "auth/login";
			axios.post(Global.urlEmpleados + request, login).then(response => {
				localStorage.clear();
				localStorage.setItem("token", response.data.response);
			});
		});
	}
}
