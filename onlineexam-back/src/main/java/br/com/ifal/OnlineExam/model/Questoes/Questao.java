package br.com.ifal.OnlineExam.model.Questoes;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Questao {
    private String assunto;
    private String enunciado;
    private String[] alternativas;
    private char respostaCorreta;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public Questao(String assunto, String enunciado, String[] alternativas, char respostaCorreta) {
        this.assunto = assunto;
        this.enunciado = enunciado;
        this.alternativas = alternativas;
        this.respostaCorreta = respostaCorreta;
    }

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
        return respostaCorreta;
    }

    public void setRespostaCorreta(char respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }

    public boolean verificarResposta(char resposta) {
        return resposta == respostaCorreta;
    }
}