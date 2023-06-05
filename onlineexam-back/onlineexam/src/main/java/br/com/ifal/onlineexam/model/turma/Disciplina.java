package br.com.ifal.onlineexam.model.turma;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "Disciplina")
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nome_disciplina")
    @NotBlank
    private String nome_disciplina;

    @Column(name="descricao_disciplina")
    @NotBlank
    private String descricao_disciplina;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome_disciplina() {
        return this.nome_disciplina;
    }

    public void setNome_disciplina(String nome_disciplina) {
        this.nome_disciplina = nome_disciplina;
    }

    public String getDescricao_disciplina() {
        return this.descricao_disciplina;
    }

    public void setDescricao_disciplina(String descricao_disciplina) {
        this.descricao_disciplina = descricao_disciplina;
    }

}