package br.com.ifal.onlineexam.model.questoes;

import java.time.LocalDateTime;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("Aberta")
public class QuestaoAberta extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public QuestaoAberta() {
        
    }

    public QuestaoAberta(String assunto, Integer dificuldade, String enunciado, LocalDateTime data){
        super(assunto, dificuldade, enunciado, data);
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}