package br.com.ifal.onlineexam.model.questoes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Questao {
    private String assunto;
    private String enunciado;
    private String[] alternativas;
    private char resposta_correta;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String[] getAlternativas() {
        return alternativas;
    }

    public void setAlternativas(String[] alternativas) {
        this.alternativas = alternativas;
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