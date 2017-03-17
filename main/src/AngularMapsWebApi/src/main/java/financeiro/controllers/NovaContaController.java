package financeiro.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import financeiro.factories.NovaContaFactory;
import financeiro.models.Usuario;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/novaConta/")
public class NovaContaController {
	
	@Autowired
    private NovaContaFactory factory;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Boolean cadastrarUsuario(@RequestBody Usuario usuario) {
		try {
			factory.getNovaContaService().save(usuario);
			return true;
			
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
