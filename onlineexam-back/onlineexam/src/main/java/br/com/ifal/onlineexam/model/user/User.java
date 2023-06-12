package br.com.ifal.onlineexam.model.user;

import java.lang.String;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@MappedSuperclass
public class User {
    @Column
    @NotBlank
    private String nome;

    @Column(nullable = false, unique = true)
    @NotBlank
    @Email
    private String email;

    @Column
    @NotBlank
    private String senha;

    @Column
    private String discente_docente;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getDiscente_docente() {
        return this.discente_docente;
    }

    public void setDiscente_docente(String discente_docente) {
        this.discente_docente = discente_docente;
    }


}
