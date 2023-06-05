package br.com.ifal.onlineexam.model.questoes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Prova {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String titulo;

    @Column
    private Long duracao;

    @ManyToMany
    @ElementCollection
    private List<QuestaoProva> QuestaoProva;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Long getDuracao() {
        return this.duracao;
    }

    public void setDuracao(Long duracao) {
        this.duracao = duracao;
    }

    public List<QuestaoProva> getQuestaoProva() {
        return this.QuestaoProva;
    }

    public void setQuestaoProva(List<QuestaoProva> QuestaoProva) {
        this.QuestaoProva = QuestaoProva;
    }

}
