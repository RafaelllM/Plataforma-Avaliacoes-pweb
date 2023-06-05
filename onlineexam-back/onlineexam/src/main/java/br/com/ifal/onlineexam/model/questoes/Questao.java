package br.com.ifal.onlineexam.model.questoes;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@MappedSuperclass
public abstract class Questao {

    @Column
    private String assunto;

    @Column
    private Integer dificuldade;

    @Column
    private String enunciado;

    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime data;

    

    public Questao(){
        
    }

    public Questao(String assunto, Integer dificuldade, String enunciado, LocalDateTime data) {
        this.assunto = assunto;
        this.dificuldade = dificuldade;
        this.enunciado = enunciado;
        this.data = data;
    }

    public String getAssunto() {
        return assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public Integer getDificuldade() {
        return dificuldade;
    }

    public void setDificuldade(Integer dificuldade) {
        this.dificuldade = dificuldade;
    }


    public LocalDateTime getData() {
        return this.data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }


}

