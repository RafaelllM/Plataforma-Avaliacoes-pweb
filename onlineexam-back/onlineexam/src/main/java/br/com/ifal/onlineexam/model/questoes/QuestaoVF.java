package br.com.ifal.onlineexam.model.questoes;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("VF")
public class QuestaoVF extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> alternativas; 
    
    @ElementCollection
    private List<Boolean> respostas; 

    public QuestaoVF() {
        
    }

    public QuestaoVF(String assunto, Integer dificuldade, String enunciado, LocalDateTime data, Long dono,  List<String> alternativas, List<Boolean> respostas) {
        super(assunto, dificuldade, enunciado, data, dono);
        this.alternativas = alternativas;
        this.respostas = respostas;
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

    public List<Boolean> getRespostas() {
        return this.respostas;
    }

    public void setRespostas(List<Boolean> respostas) {
        this.respostas = respostas;
    }

}