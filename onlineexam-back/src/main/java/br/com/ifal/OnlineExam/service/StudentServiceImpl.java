package br.com.ifal.OnlineExam.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.OnlineExam.model.Student;
import br.com.ifal.OnlineExam.repositery.StudentRepositery;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepositery studentRepositery;

    @Override
    public Student saveStudent(Student student) {
        return studentRepositery.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepositery.findAll();
    }
}
