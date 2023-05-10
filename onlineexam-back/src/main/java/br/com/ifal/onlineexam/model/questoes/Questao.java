package br.com.ifal.onlineexam.model.questoes;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Questao {
    private String assunto;
    private String enunciado;

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

}
