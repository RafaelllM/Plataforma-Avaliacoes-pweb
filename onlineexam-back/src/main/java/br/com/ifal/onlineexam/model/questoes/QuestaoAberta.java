package br.com.ifal.onlineexam.model.questoes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("Aberta")
public class QuestaoAberta extends Questao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}
