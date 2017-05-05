import { CATEGORIA_MOVIMENTACAO } from '../../app.constants';

class  WelcomeController {
	constructor(loginService, $location, movimentacaoService) {
		this.loginService = loginService;
		this.location = $location;
		this.movimentacaoService = movimentacaoService;
		movimentacaoService.recuperarTodos(loginService.usuarioLogado.id).then(
			response => {
				let listaMovimentacao = response.data;
				let somaReceita = 0;
				let somaDespesas = 0;
				let somaCategorias = {
					alimentacao: 0,
					transporte: 0,
					lazer: 0,
					vestuario: 0,
					outros: 0
				};
				for(let m of listaMovimentacao) {
					if(m.tipo == 'credito') {
						somaReceita += m.valor;
					} else {
						somaDespesas += m.valor;
					}
					switch(m.categoria) {
						case 'alimentacao': somaCategorias.alimentacao++;break;
						case 'transporte': somaCategorias.transporte++;break;
						case 'lazer': somaCategorias.lazer++;break;
						case 'vestuario': somaCategorias.vestuario++;break;
						case 'outros': somaCategorias.outros++;break;
					}
				}
				this.totalReceitas = somaReceita;
				this.totalDespesas = somaDespesas;
				let valores = [];
				for(let i in somaCategorias) {
					valores.push([CATEGORIA_MOVIMENTACAO[i], somaCategorias[i]]);
				}
				$.jqplot('pieChart', [valores], {
					seriesDefaults:{
						renderer:$.jqplot.PieRenderer,
						rendererOptions: {
							showDataLabels: true
						}
					},
					legend: {
						show: true,
						location: 's',
						placement: 'inside',
						rendererOptions: {
							numberRows: 1
						}
					}
				});
			}
		);

	}

	extrato(tipo) {
		this.location.url('/extrato?tipo='+tipo);
	}
}

WelcomeController.$inject = ['loginService', '$location', 'movimentacaoService'];

export const WelcomeComponent = {
	controller: WelcomeController,
	controllerAs: '$ctrl',
	template: require('./welcome.html')
}