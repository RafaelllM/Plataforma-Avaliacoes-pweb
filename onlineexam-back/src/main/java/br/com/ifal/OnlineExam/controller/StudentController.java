package br.com.ifal.OnlineExam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifal.OnlineExam.model.Student;
import br.com.ifal.OnlineExam.service.StudentService;

@RestController
@RequestMapping("/")
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/cadastro")
    public String cadastro(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "Estudante cadastrado com sucesso";
    }

    @GetMapping("/turma")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

}
