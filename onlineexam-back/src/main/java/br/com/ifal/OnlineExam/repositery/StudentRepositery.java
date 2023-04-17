package br.com.ifal.OnlineExam.repositery;

import br.com.ifal.OnlineExam.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepositery extends JpaRepository<Student, Long> {

}
