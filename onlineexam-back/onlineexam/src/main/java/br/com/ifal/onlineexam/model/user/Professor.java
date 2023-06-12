package br.com.ifal.onlineexam.model.user;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Professor")
public class Professor extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ElementCollection
    private List<Long> disciplinas;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

}
