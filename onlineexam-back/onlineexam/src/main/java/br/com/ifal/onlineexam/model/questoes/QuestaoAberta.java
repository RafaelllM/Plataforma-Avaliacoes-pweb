package br.com.ifal.onlineexam.model.questoes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import br.com.ifal.onlineexam.model.user.Professor;

@Entity
@DiscriminatorValue("Aberta")
public class QuestaoAberta extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "Teacher_id")
    private Professor professor_questao_aberta;
}