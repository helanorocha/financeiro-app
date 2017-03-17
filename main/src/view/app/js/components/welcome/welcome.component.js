class  WelcomeController {
	constructor(loginService, $location) {
		this.loginService = loginService;
		this.location = $location
	}

	adicionarMovimentacao() {
		this.location.url('/novaMovimentacao');
	}
}

WelcomeController.$inject = ['loginService', '$location'];

export const WelcomeComponent = {
	controller: WelcomeController,
	controllerAs: '$ctrl',
	template: require('./welcome.html')
}