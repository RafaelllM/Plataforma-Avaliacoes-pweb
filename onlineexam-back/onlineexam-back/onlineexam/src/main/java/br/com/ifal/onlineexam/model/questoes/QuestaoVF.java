package br.com.ifal.onlineexam.model.questoes;

import java.util.List;

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
@DiscriminatorValue("VF")
public class QuestaoVF extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ElementCollection
    private List<String> alternativas; 

    @ElementCollection
    private List<Boolean> respostas; 

    @ManyToOne
    @JoinColumn(name = "Teacher_id")
    private Professor professor_questaoVF;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

}