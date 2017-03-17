import { API_URLS } from '../app.constants';

export class NovaContaService {
	constructor($http) {
		this.http = $http;
	}

    enviarForm(usuario) {
		let req = this.getRequest(API_URLS.NOVA_CONTA, usuario, 'POST');
		return this.http(req);
	}

	getRequest(url, data, method) {
		return {
			method: method,
			url: url,
            data: data,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
	}
}

NovaContaService.$inject = ['$http'];