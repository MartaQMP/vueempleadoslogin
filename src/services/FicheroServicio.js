import { Global } from "@/Global";
import axios from "axios";

export default class FicheroService {
	portFichero(fichero) {
		return new Promise(function (resolve) {
			let request = "api/testingfiles";
			axios.post(Global.urlFichero + request, fichero).then(response => {
				resolve(response);
			});
		});
	}
}
