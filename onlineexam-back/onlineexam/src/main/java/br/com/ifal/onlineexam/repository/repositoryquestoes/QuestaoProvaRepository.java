package br.com.ifal.onlineexam.repository.repositoryquestoes;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.questoes.QuestaoProva;

public interface QuestaoProvaRepository extends JpaRepository<QuestaoProva, Long> {

    public Optional<QuestaoProva> findById(Long id);
    
}
