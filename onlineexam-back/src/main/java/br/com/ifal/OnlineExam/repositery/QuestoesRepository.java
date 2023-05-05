package br.com.ifal.OnlineExam.repositery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ifal.OnlineExam.model.Questoes.Questao;

@Repository
public interface QuestoesRepository extends JpaRepository<Questao, Long> {

}
