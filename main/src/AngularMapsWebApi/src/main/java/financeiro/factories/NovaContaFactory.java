package financeiro.factories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import financeiro.repositories.NovaContaRepository;

@Component
public class NovaContaFactory {

	@Autowired
    private NovaContaRepository service;
	
	public NovaContaRepository getNovaContaService() {
		return service;
	}
}
