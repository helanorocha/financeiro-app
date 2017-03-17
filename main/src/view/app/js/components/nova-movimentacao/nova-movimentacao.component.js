class NovaMovimentacaoController {
    constructor($location) {
        this.entrada = {};
        this.location = $location;
    }

    cancelar() {
        this.location.url('/welcome');
    }
}

NovaMovimentacaoController.$inject = ['$location'];

export const NovaMovimentacaoComponent = {
    controller: NovaMovimentacaoController,
    controllerAs: '$ctrl',
    template: require('./nova-movimentacao.html')
};