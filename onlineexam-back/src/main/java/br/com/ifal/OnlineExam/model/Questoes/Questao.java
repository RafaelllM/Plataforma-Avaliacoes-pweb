package br.com.ifal.OnlineExam.model.Questoes;

public class Questao {
    private String assunto;
    private String enunciado;
    private String[] alternativas;
    private char respostaCorreta;

    public Questao(String assunto, String enunciado, String[] alternativas, char respostaCorreta) {
        this.assunto = assunto;
        this.enunciado = enunciado;
        this.alternativas = alternativas;
        this.respostaCorreta = respostaCorreta;
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