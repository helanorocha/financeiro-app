package financeiro.factories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import financeiro.repositories.LoginRepository;

@Component
public class LoginFactory {
	@Autowired
    private LoginRepository service;
	
	public LoginRepository getLoginService() {
		return service;
	}
}
