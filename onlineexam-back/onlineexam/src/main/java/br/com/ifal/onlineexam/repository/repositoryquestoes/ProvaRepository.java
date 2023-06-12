package br.com.ifal.onlineexam.repository.repositoryquestoes;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifal.onlineexam.model.questoes.Prova;

public interface ProvaRepository extends JpaRepository<Prova, Long> {
    
}
