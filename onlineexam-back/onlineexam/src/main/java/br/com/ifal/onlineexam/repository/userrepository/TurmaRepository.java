package br.com.ifal.onlineexam.repository.userrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.turma.Disciplina;

public interface TurmaRepository extends JpaRepository<Disciplina, Long> {

}
