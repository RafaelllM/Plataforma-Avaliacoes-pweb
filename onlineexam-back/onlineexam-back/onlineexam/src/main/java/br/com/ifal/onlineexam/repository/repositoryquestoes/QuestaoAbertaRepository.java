package br.com.ifal.onlineexam.repository.repositoryquestoes;


import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;

public interface QuestaoAbertaRepository extends JpaRepository<QuestaoAberta, Long> {

}
