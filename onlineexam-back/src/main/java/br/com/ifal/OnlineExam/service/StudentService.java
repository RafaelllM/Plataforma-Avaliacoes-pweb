package br.com.ifal.OnlineExam.service;

import java.util.List;

import br.com.ifal.OnlineExam.model.Student;

public interface StudentService {
    public Student saveStudent(Student Student);

    public List<Student> getAllStudents();
}
