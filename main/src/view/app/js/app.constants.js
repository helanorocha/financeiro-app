export const HTTP_STATUS = {
	OK: 200,
	BAD_REQUEST: 400,
	SERVER_ERROR: 500
};

export const API_URLS = {
	LOGIN: 'http://localhost:8080/login/',
	NOVA_CONTA: 'http://localhost:8080/novaConta/',
	MOVIMENTACAO: 'http://localhost:8080/movimentacao/'
}

export const TIPO_MOVIMENTACAO = {
	credito: 'Crédito',
	debito: 'Débito'
}

export const CATEGORIA_MOVIMENTACAO = {
	'alimentacao': 'Alimentação',
	'transporte': 'Transporte',
	'lazer': 'Lazer',
	'vestuario': 'Vestuário',
	'outros': 'Outros',
	'receita': 'Receita'
}

export const FORMA_MOVIMENTACAO = {
	'dinheiro': 'Dinheiro',
	'cartao-credito': 'Cartão de crédito',
	'debito-conta': 'Débito em conta'
}