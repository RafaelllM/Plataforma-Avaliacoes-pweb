package br.com.ifal.OnlineExam.controller;

import java.util.List;

import javax.persistence.NonUniqueResultException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import br.com.ifal.OnlineExam.model.User;
import br.com.ifal.OnlineExam.service.UserServiceImpl;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @PostMapping("/cadastro")
    public ResponseEntity<User> cadastro(@RequestBody @Valid User user) throws BadRequest, NonUniqueResultException {
        try {
            if (userService.VerificarEmail(user.getEmail())) {
                throw new RuntimeException();
            }
            User usuarioSalvo = userService.SalvarUsuario(user);
            return ResponseEntity.ok(usuarioSalvo);
        } catch (BadRequest e) {
            return ResponseEntity.badRequest().build();
        } catch (NonUniqueResultException e) {
            return ResponseEntity.badRequest().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/turma")
    public List<User> turma() {
        return userService.getAllStudents();
    }

    @PutMapping("/turma")
    public ResponseEntity<User> update(@RequestBody @Valid User aluno){
	User alunoAtualizado = userService.EditarUsuario(aluno);
        return ResponseEntity.ok(alunoAtualizado);	
   }    
}
























