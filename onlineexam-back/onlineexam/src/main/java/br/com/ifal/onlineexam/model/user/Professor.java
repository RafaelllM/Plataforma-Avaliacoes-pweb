package br.com.ifal.onlineexam.model.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;
import br.com.ifal.onlineexam.model.turma.Disciplina;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoAbertaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoFechadaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoVFRepository;
import br.com.ifal.onlineexam.repository.userrepository.TurmaRepository;

@Entity
public class Professor extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Autowired
    private QuestaoAbertaRepository questoesAbertaRepository;
    @Autowired
    private QuestaoFechadaRepository questoesFechadasRepository;
    @Autowired
    private QuestaoVFRepository questoesVFRepository;
    @Autowired
    private TurmaRepository turmaRepository;

    public QuestaoAberta SalvarQuestaoAberta(QuestaoAberta questao) {
        return questoesAbertaRepository.save(questao);
    }

    public QuestaoFechada SalvarQuestaoFechada(QuestaoFechada questao) {
        return questoesFechadasRepository.save(questao);
    }

    public QuestaoVF SalvarQuestaoVF(QuestaoVF questao) {
        return questoesVFRepository.save(questao);
    }

    public Disciplina CriarTurma(Disciplina turma) {
        return turmaRepository.save(turma);
    }
    
}
