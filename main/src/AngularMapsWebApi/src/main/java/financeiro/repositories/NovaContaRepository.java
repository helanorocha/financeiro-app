package financeiro.repositories;

import org.springframework.data.repository.CrudRepository;

import financeiro.models.Usuario;

public interface NovaContaRepository extends CrudRepository<Usuario, Long>{

}