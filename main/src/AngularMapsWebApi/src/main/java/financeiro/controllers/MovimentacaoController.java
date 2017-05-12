package financeiro.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import financeiro.factories.LoginFactory;
import financeiro.factories.MovimentacaoFactory;
import financeiro.models.Movimentacao;
import financeiro.models.Usuario;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/movimentacao/")
public class MovimentacaoController {

	@Autowired
    private MovimentacaoFactory factory;
	@Autowired
	private LoginFactory usuarioFactory;
	
	@RequestMapping(method = RequestMethod.GET, path = "{id}")
	public List<Movimentacao> recuperarTodos(@PathVariable Long id) {
		Usuario usuario = usuarioFactory.getLoginService().findOne(id);
		List<Movimentacao> lista = (List<Movimentacao>) factory.getMovimentacaoService().findAll();
		List<Movimentacao> retorno = new ArrayList<Movimentacao>();
		
		SimpleDateFormat sdf = new SimpleDateFormat("MM");
		String mesAtual = sdf.format(new Date());
		String dataUsuario = usuario.getDiaReceita() + "/" + mesAtual;
		Double receita = usuario.getReceitaMensal();
		boolean valorAdicionado = false;
		
		for(Movimentacao m : lista) {
			if(m.getUsuario().getId() == id) {
				retorno.add(m);
				String diaMes = m.getData().substring(0, 5);
				if(diaMes.equals(dataUsuario) ) {
					valorAdicionado = true;
				}
			}
		}
		
		sdf.applyPattern("dd/MM");
		Date dateUsuario;
		try {
			dateUsuario = sdf.parse(dataUsuario);
			if(!valorAdicionado && dateUsuario.before(new Date())) {
				Movimentacao m = new Movimentacao();
				sdf.applyPattern("MM/yyyy");
				m.setData(usuario.getDiaReceita() + "/" + sdf.format(new Date()));
				m.setDescricao("Receita mensal");
				m.setCategoria("receita");
				m.setTipo("credito");
				m.setValor(receita);
				m.setUsuario(usuario);
				Movimentacao mov = factory.getMovimentacaoService().save(m);
				retorno.add(mov);
				
			}
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Collections.sort(retorno);
		return retorno;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Movimentacao salvar(@RequestBody Movimentacao movimentacao) {
		Movimentacao mov = factory.getMovimentacaoService().save(movimentacao);
		return mov;
	}
	
	@RequestMapping(method = RequestMethod.DELETE, path = "{id}")
	public void salvar(@PathVariable Long id) {
		factory.getMovimentacaoService().delete(id);
	}
}
