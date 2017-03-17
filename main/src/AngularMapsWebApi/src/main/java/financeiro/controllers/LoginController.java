package financeiro.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import financeiro.factories.LoginFactory;
import financeiro.models.Usuario;

@RestController

@CrossOrigin(origins = "*")
@RequestMapping(value = "/login/")
public class LoginController {

	@Autowired
    private LoginFactory factory;
	
    
	@RequestMapping(method = RequestMethod.POST)
    public Object login(@RequestBody Usuario usuario) {
		if(usuario.getLogin() == null || usuario.getPassword() == null) {
			return false;
		}
    	List<Usuario> usuarios = (List<Usuario>) factory.getLoginService().findAll();
    	for (Usuario usuario2 : usuarios) {
			if(usuario.getLogin().equals(usuario2.getLogin()) && usuario.getPassword().equals(usuario2.getPassword())) {
				return usuario2;
			}
		}
    	return false;
    }
    

}