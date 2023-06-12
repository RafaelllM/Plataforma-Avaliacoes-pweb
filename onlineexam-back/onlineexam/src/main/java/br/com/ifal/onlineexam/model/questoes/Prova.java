package br.com.ifal.onlineexam.model.questoes;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

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
public class Prova {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    private String titulo;

    @Column
    private Long duracao;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "prova_id")
    private List<QuestaoProva> QuestaoProva;
    

    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime data;

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

    public void setQuestaoProva(List<QuestaoProva> questoes) {
        this.QuestaoProva = questoes;
    }

}
