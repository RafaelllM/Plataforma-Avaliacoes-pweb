package br.com.ifal.onlineexam.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifal.onlineexam.model.questoes.Questao;

public interface QuestoesRepository extends JpaRepository<Questao, Long> {

}
