package br.com.ifal.onlineexam.repository.userrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ifal.onlineexam.model.user.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
