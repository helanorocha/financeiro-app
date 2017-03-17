class NovaContaController {
    
	constructor(loginService, novaContaService, $location) {
		this.loginService = loginService;
		this.novaContaService = novaContaService;
        this.location = $location;
        this.usuario = {};
        if(this.loginService.usuarioLogado) {
            this.usuario = this.loginService.usuarioLogado;
        }
	}

    enviarForm() {
        this.novaContaService.enviarForm(this.usuario).then(
            response => {
                if(!this.loginService.usuarioLogado) {
                    if(response.data){
                        alert('Usuário cadastrado com  sucesso');
                        this.location.url('/login');
                    } else {
                        alert('Erro ao cadastrar usuário');
                    }
                } else {
                    if(response.data){
                        alert('Informações atualizadas com  sucesso');
                        this.location.url('/welcome');
                    } else {
                        alert('Erro ao atualizar informações');
                    }
                }
            });
    }

}

NovaContaController.$inject = ['loginService', 'novaContaService', '$location'];

export const NovaContaComponent = {
	controller: NovaContaController,
	controllerAs: '$ctrl',
	template: require('./nova-conta.html')
}