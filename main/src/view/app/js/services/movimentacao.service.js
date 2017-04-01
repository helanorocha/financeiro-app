import { API_URLS } from '../app.constants';

export class MovimentacaoService {
	constructor($http) {
		this.http = $http;
	}

    salvar(movimentacao) {
		let req = this.getPostRequest(API_URLS.MOVIMENTACAO, movimentacao, 'POST');
		return this.http(req);
	}

    recuperarTodos(id) {
		let req = this.getRequest(API_URLS.MOVIMENTACAO+id, 'GET');
		return this.http(req);
	}

    deletar(id) {
        let req = this.getRequest(API_URLS.MOVIMENTACAO+id, 'DELETE');
		return this.http(req);
    }

	getPostRequest(url, data, method) {
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

MovimentacaoService.$inject = ['$http'];