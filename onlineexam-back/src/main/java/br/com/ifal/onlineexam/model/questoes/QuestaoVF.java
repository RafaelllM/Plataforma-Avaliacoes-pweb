package br.com.ifal.onlineexam.model.questoes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("VF")
public class QuestaoVF extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String[][] alternativas;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String[][] getAlternativas() {
        return alternativas;
    }

    public void setAlternativas(String[][] alternativas) {
        this.alternativas = alternativas;
    }

}