package br.com.ifal.onlineexam.controller;

import java.util.List;

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

import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;
import br.com.ifal.onlineexam.model.turma.Disciplina;
import br.com.ifal.onlineexam.model.user.Aluno;
import br.com.ifal.onlineexam.model.user.Professor;
import br.com.ifal.onlineexam.model.user.User;
import br.com.ifal.onlineexam.service.questoes.QuestoesServiceImpl;
import br.com.ifal.onlineexam.service.user.UserServiceImpl;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000")
public class Controller {
    @Autowired
    UserServiceImpl userService;
    @Autowired
    QuestoesServiceImpl questoesService;

    @PostMapping("/cadastro/professor")
    public void cadastro(@RequestBody @Valid Professor professor) throws BadRequest, NonUniqueResultException {
        userService.SalvarProfessor(professor);
    }

    @PostMapping("/cadastro/aluno")
    public void cadastro(@RequestBody @Valid Aluno aluno) throws BadRequest, NonUniqueResultException {
        userService.SalvarAluno(aluno);
    }

    @PostMapping("/turma")
    public String CriarTurma(Disciplina turma) {
        return "Necessário implementar Sessões primeiro";
    }

    @GetMapping("/turma")
    public List<Aluno> ListarAlunos() {
        return userService.getAllStudents();
    }

    @PutMapping("/turma")
    public ResponseEntity<User> AtualizarAluno(@RequestBody @Valid Aluno aluno) {
        User alunoAtualizado = userService.AtualizarAluno(aluno);
        return ResponseEntity.ok(alunoAtualizado);
    }

    @DeleteMapping("/turma")
    public String RemoverAluno(@RequestBody @Valid Aluno aluno) {
        return userService.DeletarAluno(aluno);
    }

    @GetMapping("/questoes")
    public List<Object> listarQuestoes() {
        return questoesService.getAllQuestoes();
    }

    @GetMapping("/questoes/aberta")
    public List<QuestaoAberta> ListarQuestoesAbertas() {
        return questoesService.getAllQuestaoAbertas();
    }

    @PostMapping("/questoes/aberta")
    public String SalvarQuestaoAberta(@RequestBody QuestaoAberta questao) {
        return "Necessário implementar Sessões primeiro";
    }

    @GetMapping("/questoes/fechadas")
    public List<QuestaoFechada> listarQuestoesFechadas() {
        return questoesService.getAllQuestaoFechadas();
    }

    @PostMapping("/questoes/fechada")
    public String SalvarQuestaoFechada(@RequestBody QuestaoFechada questao) {
        return "Necessário implementar Sessões primeiro";
    }

    @GetMapping("/questoes/vf")
    public List<QuestaoVF> listarQuestoesVFs() {
        return questoesService.getAllQuestaoVFs();
    }

    @PostMapping("/questoes/vf")
    public String SalvarQuestaoVF(@RequestBody QuestaoVF questao) {
        return "Necessário implementar Sessões primeiro";
    }
}
