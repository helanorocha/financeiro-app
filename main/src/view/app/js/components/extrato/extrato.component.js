import { TIPO_MOVIMENTACAO, CATEGORIA_MOVIMENTACAO, FORMA_MOVIMENTACAO } from '../../app.constants';

class  ExtratoController {
	constructor(loginService, $location, movimentacaoService, $routeParams) {
		this.loginService = loginService;
		this.location = $location
		this.enumTipo = TIPO_MOVIMENTACAO;
		this.enumCategoria = CATEGORIA_MOVIMENTACAO;
		this.enumForma = FORMA_MOVIMENTACAO;
		this.movimentacaoService = movimentacaoService;
        let params = $routeParams;
        movimentacaoService.recuperarTodos(loginService.usuarioLogado.id).then(
            response => {
                this.montarLista(response, params);
            }
        );
	}

	montarLista(response, params) {
		if(params.tipo) {
			response.data = response.data.filter((m) => m.tipo == params.tipo);
		}
		this.listaMovimentacao = response.data;
		let soma = 0;
		for(let m of this.listaMovimentacao) {
			if(m.tipo == 'credito') {
				soma += m.valor;
			} else {
				if(params.tipo) {
					soma +=m.valor;
				} else {
					soma -= m.valor;
				}
			}
		}
		let sinalSaldo = 'credito';
		if(soma == 0) {
			sinalSaldo = '';
		}
		if(soma < 1 || params.tipo == 'debito') {
			sinalSaldo = 'debito';
		}

		if(!params.tipo) {
			this.labelTotal = 'Saldo';
		} else {
			this.labelTotal = 'Total';
		}

		this.sinalSaldo = sinalSaldo;
		this.total = soma;
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

	openModal(movimentacao) {
		this.movimentacaoModal = movimentacao;
		console.log(this.movimentacaoModal);
	}
}

ExtratoController.$inject = ['loginService', '$location', 'movimentacaoService', '$routeParams'];

export const ExtratoComponent = {
	controller: ExtratoController,
	controllerAs: '$ctrl',
	template: require('./extrato.html')
}