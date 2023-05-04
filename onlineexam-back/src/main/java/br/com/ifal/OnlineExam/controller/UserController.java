package br.com.ifal.OnlineExam.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.NonUniqueResultException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException.BadRequest;

import br.com.ifal.OnlineExam.model.User.*;
import br.com.ifal.OnlineExam.model.Questoes.*;
import br.com.ifal.OnlineExam.service.User.Questoes.QuestoesServiceImpl;
import br.com.ifal.OnlineExam.service.User.User.UserServiceImpl;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    UserServiceImpl userService;
    QuestoesServiceImpl questoesService;

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

    @PostMapping("/login")
    public ResponseEntity<Optional<User>> login(@RequestBody String email, String senha) {
        Optional<User> login = userService.VerificarLogin(email, senha);
        if (login != null) {
            return ResponseEntity.ok(login);
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/turma")
    public List<User> ListarAlunos() {
        return userService.getAllStudents();
    }

    @PutMapping("/turma")
    public ResponseEntity<User> AtualizarAluno(@RequestBody @Valid User aluno) {
        User alunoAtualizado = userService.SalvarUsuario(aluno);
        return ResponseEntity.ok(alunoAtualizado);
    }

    @DeleteMapping("/turma")
    public String RemoverAluno(@RequestBody @Valid User aluno) {
        return userService.DeletarAluno(aluno);
    }

    @PostMapping("/questoes/fechadas")
    public ResponseEntity<Questao> SalvarQuestao(@RequestBody Questao questao) {
        try {
            Questao questaosalva = questoesService.SalvarQuestao(questao);
            return ResponseEntity.ok(questaosalva);
        } catch (BadRequest e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
