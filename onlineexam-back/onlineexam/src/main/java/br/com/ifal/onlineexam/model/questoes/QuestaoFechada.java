package br.com.ifal.onlineexam.model.questoes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import br.com.ifal.onlineexam.model.user.Professor;

@Entity
@DiscriminatorValue("Fechada")
public class QuestaoFechada extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ElementCollection
    private List<String> alternativas;
    
    @Column
    private char resposta_correta;

    @ManyToOne
    @JoinColumn(name = "Teacher_id")
    private Professor professor_questao_fechada;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public char getRespostaCorreta() {
        return resposta_correta;
    }

    public void setRespostaCorreta(char respostaCorreta) {
        this.resposta_correta = respostaCorreta;
    }

    public boolean verificarResposta(char resposta) {
        return resposta == resposta_correta;
    }
}