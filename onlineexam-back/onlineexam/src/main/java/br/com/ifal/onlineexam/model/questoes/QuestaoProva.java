package br.com.ifal.onlineexam.model.questoes;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QuestaoProva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String assunto;

    @Column
    private Integer dificuldade;

    @Column
    private String enunciado;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime data;

    @ElementCollection
    private List<String> alternativas;
    
    @Column
    private char resposta_correta;

    @ElementCollection
    private List<Boolean> respostas; 

    public QuestaoProva(String assunto, Integer dificuldade, String enunciado, LocalDateTime data){
        this.assunto = assunto;
        this.dificuldade = dificuldade;
        this.enunciado = enunciado;
        this.data = data;
    }

    public QuestaoProva(String assunto, Integer dificuldade, String enunciado, LocalDateTime data,  List<String> alternativas, char resposta_correta){
        this.assunto = assunto;
        this.dificuldade = dificuldade;
        this.enunciado = enunciado;
        this.data = data;
        this.alternativas = alternativas;
        this.resposta_correta = resposta_correta;
    }

    public QuestaoProva(String assunto, Integer dificuldade, String enunciado, LocalDateTime data,  List<String> alternativas, List<Boolean> respostas){
        this.assunto = assunto;
        this.dificuldade = dificuldade;
        this.enunciado = enunciado;
        this.data = data;
        this.alternativas = alternativas;
        this.respostas = respostas;
    }


    public String getAssunto() {
        return this.assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public Integer getDificuldade() {
        return this.dificuldade;
    }

    public void setDificuldade(Integer dificuldade) {
        this.dificuldade = dificuldade;
    }

    public String getEnunciado() {
        return this.enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public LocalDateTime getData() {
        return this.data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
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

    public List<Boolean> getRespostas() {
        return this.respostas;
    }

    public void setRespostas(List<Boolean> respostas) {
        this.respostas = respostas;
    }


}
