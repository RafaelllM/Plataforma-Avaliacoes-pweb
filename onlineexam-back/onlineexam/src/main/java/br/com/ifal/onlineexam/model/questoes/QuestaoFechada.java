package br.com.ifal.onlineexam.model.questoes;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("Fechada")
public class QuestaoFechada extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> alternativas;
    
    @Column
    private char resposta_correta;

    public QuestaoFechada() {
        
    }

    public QuestaoFechada(String assunto, Integer dificuldade, String enunciado, LocalDateTime data,  List<String> alternativas, char resposta_correta) {
        super(assunto, dificuldade, enunciado, data);
        this.alternativas = alternativas;
        this.resposta_correta = resposta_correta;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public List<String> getAlternativas() {
        return this.alternativas;
    }

    public void setAlternativas(List<String> alternativas) {
        this.alternativas = alternativas;
    }

    public char getResposta_correta() {
        return this.resposta_correta;
    }

    public void setResposta_correta(char resposta_correta) {
        this.resposta_correta = resposta_correta;
    }

}