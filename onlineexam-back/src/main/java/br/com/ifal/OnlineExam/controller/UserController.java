package br.com.ifal.OnlineExam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifal.OnlineExam.model.User;
import br.com.ifal.OnlineExam.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin
public class UserController {
    @Autowired
    UserService studentService;

    @PostMapping("/cadastro")
    public void cadastro(@RequestBody User student) {
        studentService.saveStudent(student);
    }

    @GetMapping("/turma")
    public List<User> getAllStudents() {
        return studentService.getAllStudents();
    }

}
