class LoginController {
    
	constructor(loginService, $location) {
		this.loginService = loginService;
        this.location = $location;
        this.usuario = {};
	}

    login() {
        this.loginService.login(this.usuario).then(
            (response) => {
                console.log('entrou');
                if(response.data) {
                    this.loginService.usuarioLogado = response.data;
                    if(!this.loginService.usuarioLogado.receitaMensal) {
                        this.location.url('/minhaConta');
                    } else {
                        this.location.url('/welcome');
                    }
                } else {
                    alert('Conta não existe.');
                }
            });

    }

    novaConta() {
        this.location.url('/novaConta');
    }

}

LoginController.$inject = ['loginService', '$location'];

export const LoginComponent = {
	controller: LoginController,
	controllerAs: '$ctrl',
	template: require('./login.html')
}