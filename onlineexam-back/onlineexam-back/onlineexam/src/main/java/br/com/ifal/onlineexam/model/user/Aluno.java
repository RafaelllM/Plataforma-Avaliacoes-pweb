package br.com.ifal.onlineexam.model.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Aluno extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

}
