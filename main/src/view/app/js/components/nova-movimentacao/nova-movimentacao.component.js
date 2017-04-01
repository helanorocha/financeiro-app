class NovaMovimentacaoController {
    constructor($location, movimentacaoService, loginService) {
        this.entrada = {};
        this.location = $location;
        this.movimentacaoService = movimentacaoService;
        this.loginService = loginService;
    }

    cancelar() {
        this.location.url('/welcome');
    }

    salvar() {
        this.movimentacao.usuario = this.loginService.usuarioLogado;
        this.movimentacaoService.salvar(this.movimentacao).then(
            response => {
                if(response.data) {
                    alert('Movimentacao adicionada com sucesso');
                    this.location.url('/welcome');
                }
            }
        )
    }
}

NovaMovimentacaoController.$inject = ['$location', 'movimentacaoService', 'loginService'];

export const NovaMovimentacaoComponent = {
    controller: NovaMovimentacaoController,
    controllerAs: '$ctrl',
    template: require('./nova-movimentacao.html')
};