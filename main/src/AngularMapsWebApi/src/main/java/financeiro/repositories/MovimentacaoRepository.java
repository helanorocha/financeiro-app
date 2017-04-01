package financeiro.repositories;

import org.springframework.data.repository.CrudRepository;

import financeiro.models.Movimentacao;

public interface MovimentacaoRepository extends CrudRepository<Movimentacao, Long>{

}
