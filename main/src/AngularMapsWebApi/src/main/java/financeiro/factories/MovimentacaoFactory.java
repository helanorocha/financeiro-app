package financeiro.factories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import financeiro.repositories.MovimentacaoRepository;

@Component
public class MovimentacaoFactory {
	
	@Autowired
    private MovimentacaoRepository service;
	
	public MovimentacaoRepository getMovimentacaoService() {
		return service;
	}

}
