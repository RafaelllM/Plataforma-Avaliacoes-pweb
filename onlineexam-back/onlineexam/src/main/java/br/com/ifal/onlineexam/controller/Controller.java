package br.com.ifal.onlineexam.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
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

import br.com.ifal.onlineexam.model.questoes.Prova;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoProva;
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
public class Controller<T> {

    @Autowired
    UserServiceImpl userService;
    @Autowired
    QuestoesServiceImpl questoesService;

    /* -----------------------------------------Controller Cadastro/Login------------------------------------------------- */

    @PostMapping("/cadastro/professor")
    public ResponseEntity<Professor> cadastro(@RequestBody @Valid Professor professor, HttpSession sessao) {
        try {
            Professor novoProfessor = userService.salvarProfessor(professor);
            professor.setDiscente_docente("Professor");
            return ResponseEntity.ok(novoProfessor);
        } catch (Error e) {
            return ResponseEntity.status(409).build();
        }
    }

    @PostMapping("/cadastro/aluno")
    public ResponseEntity<Aluno> cadastro(@RequestBody @Valid Aluno aluno, HttpSession sessao) {
        try {
            Aluno novoAluno = userService.salvarAluno(aluno);
            aluno.setDiscente_docente("Aluno");
            System.out.println(sessao);
            return ResponseEntity.ok(novoAluno);
        } catch (Error e) {
            return ResponseEntity.status(409).build();
        }
    }

    /* -----------------------------------------Controller Turma------------------------------------------------- */

    @GetMapping("/turma")
    public List<Disciplina> listaTurmas() {
        return userService.getAllDisciplinas();
    }

    @PostMapping("/turma")
    public Disciplina criarTurma(@RequestBody Disciplina turma) {
        return userService.criarTurma(turma);
    }

    @GetMapping("/alunos")
    public List<Aluno> listarAlunos() {
        return userService.getAllAlunos();
    }

    @PutMapping("/turma/{id}")
    public ResponseEntity<?> atualizarAluno(@RequestBody @Valid Aluno aluno) {
        User alunoAtualizado = userService.atualizarAluno(aluno);
        return ResponseEntity.ok(alunoAtualizado);
    }

    @DeleteMapping("/turma/{id}")
    public String removerAluno(@RequestBody @Valid Aluno aluno) {
        return userService.deletarAluno(aluno);
    }
    

    /* -----------------------------------------Controller Questões------------------------------------------------- */


    @GetMapping("/questoes/aberta")
    public List<QuestaoAberta> listarQuestoesAbertas() {
        List<QuestaoAberta> Aberta = questoesService.getAllQuestaoAbertas();
        return Aberta;
    }

    @PostMapping("/questoes/aberta")
    public QuestaoAberta salvarQuestaoAberta(@RequestBody QuestaoAberta questaoAberta) {
        return questoesService.salvarQuestaoAberta(questaoAberta);
    }

    @PutMapping("/questoes/aberta")
    public ResponseEntity<?> atualizarQuestaoAberta(@RequestBody QuestaoAberta questaoAberta) {
        QuestaoAberta questaoA = questoesService.salvarQuestaoAberta(questaoAberta);
        return ResponseEntity.ok(questaoA);
    }

    @DeleteMapping("/questoes/aberta")
    public String deletarQuestaoAberta(@RequestBody QuestaoAberta questaoAberta) {
        return questoesService.deletarQuestaoAberta(questaoAberta);
    }

    @GetMapping("/questoes/fechada")
    public List<QuestaoFechada> listarQuestoesFechadas() {
        List<QuestaoFechada> Fechada = questoesService.getAllQuestaoFechadas();
        return Fechada;
    }

    @PostMapping("/questoes/fechada")
    public QuestaoFechada salvarQuestaoFechada(@RequestBody QuestaoFechada questaofechada) {
        return questoesService.salvarQuestaoFechada(questaofechada);
    }

    @PutMapping("/questoes/fechada")
    public ResponseEntity<?> atualizarQuestaoFechada(@RequestBody QuestaoFechada questaoFechada) {
        QuestaoFechada questaoF = questoesService.salvarQuestaoFechada(questaoFechada);
        return ResponseEntity.ok(questaoF);
    }

    @DeleteMapping("/questoes/fechada")
    public String deletarQuestaoFechada(@RequestBody QuestaoFechada questaoFberta) {
        return questoesService.deletarQuestaoFechada(questaoFberta);
    }

    @GetMapping("/questoes/vf")
    public List<QuestaoVF> listarQuestoesVFs() {
        List<QuestaoVF> VF = questoesService.getAllQuestaoVFs();
        return VF;
    }

    @PostMapping("/questoes/vf")
    public QuestaoVF salvarQuestaoVF(@RequestBody QuestaoVF questaovf) {
        return questoesService.salvarQuestaoVF(questaovf);
    }

    @PutMapping("/questoes/vf")
    public ResponseEntity<?> atualizarQuestaoVF(@RequestBody QuestaoVF questaoVF) {
        QuestaoVF questaovf = questoesService.salvarQuestaoVF(questaoVF);
        return ResponseEntity.ok(questaovf);
    }

    @DeleteMapping("/questoes/vf")
    public String deletarQuestaoVF(@RequestBody QuestaoVF questaoVF) {
        return questoesService.deletarQuestaoVF(questaoVF);
    }

    /* -----------------------------------------Criar Prova------------------------------------------------- */

    @PostMapping("/questoes/prova")
    public String salvarQuestaoProva(@RequestBody QuestaoProva questaoProva) {
        return questoesService.salvarQuestaoProva(questaoProva);
    }

    @PostMapping("/prova")
    public Prova criarProva(@RequestBody Prova prova) {
        return questoesService.criarProva(prova);
    }
}
