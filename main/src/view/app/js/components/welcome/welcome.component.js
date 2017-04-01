class  WelcomeController {
	constructor(loginService, $location, movimentacaoService) {
		this.loginService = loginService;
		this.location = $location
		this.movimentacaoService = movimentacaoService;
		movimentacaoService.recuperarTodos(loginService.usuarioLogado.id).then(
			response => {
				this.listaMovimentacao = response.data;
			}
		)
	}

	adicionarMovimentacao() {
		this.location.url('/novaMovimentacao');
	}

	deletar(id) {
		this.movimentacaoService.deletar(id).then(
			response => {
				this.listaMovimentacao = this.listaMovimentacao.filter(m => m.id != id);
			}
		)
	}
}

WelcomeController.$inject = ['loginService', '$location', 'movimentacaoService'];

export const WelcomeComponent = {
	controller: WelcomeController,
	controllerAs: '$ctrl',
	template: require('./welcome.html')
}