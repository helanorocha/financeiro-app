import { API_URLS } from '../app.constants';

export class LoginService {
	constructor($http) {
		this.http = $http;
		this.usuarioLogado = null;
	}

    login(usuario) {
		let req = this.getRequest(API_URLS.LOGIN, 'POST');
        req.data = usuario;
		return this.http(req);
	}

	getRequest(url, method) {
		return {
			method: method,
			url: url,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
	}
}

LoginService.$inject = ['$http'];