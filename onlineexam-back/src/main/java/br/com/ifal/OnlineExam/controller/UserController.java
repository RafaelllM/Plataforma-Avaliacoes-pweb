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
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/cadastro")
    public User cadastro(@RequestBody User user) throws Exception {
        String email = user.getEmail();
        if (userService.findByEmail(email) != null) {
            throw new Exception();
        }
        return userService.saveStudent(user);
    }

    @GetMapping("/turma")
    public List<User> turma() {
        return userService.getAllStudents();
    }

}
