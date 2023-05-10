package br.com.ifal.onlineexam.repository.repositoryquestoes;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;

public interface QuestoesVFRepository extends JpaRepository<QuestaoVF, Long> {

}