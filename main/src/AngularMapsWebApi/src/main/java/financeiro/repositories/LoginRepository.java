package financeiro.repositories;

import org.springframework.data.repository.CrudRepository;

import financeiro.models.Usuario;

public interface LoginRepository extends CrudRepository<Usuario, Long>{

}
