package br.com.ifal.onlineexam.repository.repositoryquestoes;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.questoes.Questao;

public interface QuestaoRepository extends JpaRepository<Questao, Long> {

}
