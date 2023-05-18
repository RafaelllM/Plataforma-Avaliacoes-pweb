package br.com.ifal.onlineexam.model.user;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;

@Entity
public class Student extends User {
    @ElementCollection

    public List<Long> getTurmas_id() {
        return this.turmas_id;
    }

    public void setTurmas_id(List<Long> turmas_id) {
        this.turmas_id = turmas_id;
    }

    @CollectionTable(name = "Lista_Turmas", joinColumns = @JoinColumn(name = "teacher.id"))
    private List<Long> turmas_id;

}
