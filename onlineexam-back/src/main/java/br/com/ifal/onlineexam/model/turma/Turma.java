package br.com.ifal.onlineexam.model.turma;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import br.com.ifal.onlineexam.model.user.Student;

@Entity
public class Turma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome_turma;

    @ElementCollection
    @CollectionTable(name = "Lista_Alunos", joinColumns = @JoinColumn(name = "turma.id"))
    private List<Student> alunos;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome_turma() {
        return this.nome_turma;
    }

    public void setNome_turma(String nome_turma) {
        this.nome_turma = nome_turma;
    }

    public List<Student> getAlunos() {
        return this.alunos;
    }

    public void setAlunos(List<Student> alunos) {
        this.alunos = alunos;
    }

}
