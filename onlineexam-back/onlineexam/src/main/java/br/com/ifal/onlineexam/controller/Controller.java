package br.com.ifal.onlineexam.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifal.onlineexam.Exceptions.ProvaNotFoundException;
import br.com.ifal.onlineexam.Exceptions.TurmaNotFoundException;
import br.com.ifal.onlineexam.model.dto.loginRequestDTO;
import br.com.ifal.onlineexam.model.dto.turma_idDTO;
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
            if (e.getMessage().equals("Campo mal preenchido")) {
                return ResponseEntity.status(400).build();
            }
            if (e.getMessage().equals("Email já cadastrado")) {
                return ResponseEntity.status(409).build();
            } else {
                return ResponseEntity.badRequest().build();
            }
        }
    }

    @PostMapping("/cadastro/aluno")
    public ResponseEntity<Aluno> cadastro(@RequestBody @Valid Aluno aluno, HttpSession sessao) {
        try {
            Aluno novoAluno = userService.salvarAluno(aluno);
            aluno.setDiscente_docente("Aluno");
            return ResponseEntity.ok(novoAluno);
        } catch (Error e) {
            if (e.getMessage() == "Campo mal preenchido") {
                return ResponseEntity.status(400).build();
            } else if (e.getMessage() == "Email já cadastrado") {
                return ResponseEntity.status(409).build();
            }
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/Login")
    public ResponseEntity<List<String>> login(@RequestBody loginRequestDTO loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();
        try {
            List<String> login = userService.findByEmailLogin(email, senha);
            return ResponseEntity.ok(login);
        } catch (Error e) {
            if (e.getMessage().equals("Email não cadastrado")) {
                return ResponseEntity.status(404).build();
            } else if (e.getMessage().equals("Senha Incorreta")) {
                return ResponseEntity.status(400).build();
            }
            return ResponseEntity.badRequest().build();
        }

    }

    /* -----------------------------------------Controller Turma------------------------------------------------- */

    @GetMapping("/alunos")
    public List<Aluno> listarAlunos() {
        return userService.getAllAlunos();
    }

    @PutMapping("/alunos")
    public ResponseEntity<?> atualizarAluno(@RequestBody @Valid Aluno aluno) {
        User alunoAtualizado = userService.atualizarAluno(aluno);
        return ResponseEntity.ok(alunoAtualizado);
    }

    @DeleteMapping("/alunos")
    public String removerAluno(@RequestBody @Valid Aluno aluno) {
        return userService.deletarAluno(aluno);
    }

    @GetMapping("/turma")
    public List<Disciplina> listaTurmas() {
        return userService.getAllDisciplinas();
    }

    @GetMapping("/turma/{id}")
    public ResponseEntity<Disciplina> getTurma(@PathVariable("id") Long id) {
        try {
            Disciplina turma = userService.retornarTurmabyId(id);
            return ResponseEntity.ok(turma);
        } catch(TurmaNotFoundException notfound) {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/turma")
    public Disciplina criarTurma(@RequestBody Disciplina turma) {
        return userService.criarTurma(turma);
    }
    

    /* -----------------------------------------Controller Questões------------------------------------------------- */


    @GetMapping("/questoes/aberta")
    public List<QuestaoAberta> listarQuestoesAbertas() {
        List<QuestaoAberta> Aberta = questoesService.getAllQuestaoAbertas();
        return Aberta;
    }

    @PostMapping("/questoes/aberta")
    public ResponseEntity<QuestaoAberta> salvarQuestaoAberta(@RequestBody QuestaoAberta questaoAberta) {
        try {
            QuestaoAberta questaoa = questoesService.salvarQuestaoAberta(questaoAberta);
            return ResponseEntity.ok(questaoa);
        } catch (Error e) {
            if (e.getMessage().equals("Enviado campos em branco")) {
                return ResponseEntity.status(400).build();
            }
            return ResponseEntity.badRequest().build();
        }
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
    public ResponseEntity<QuestaoFechada> salvarQuestaoFechada(@RequestBody QuestaoFechada questaofechada) {
        try {
            QuestaoFechada questaof = questoesService.salvarQuestaoFechada(questaofechada);
            return ResponseEntity.ok(questaof);
        } catch (Error e) {
            if (e.getMessage().equals("Enviado campos em branco")) {
                return ResponseEntity.status(400).build();
            }
            return ResponseEntity.badRequest().build();
        }
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
    public ResponseEntity<QuestaoVF> salvarQuestaoVF(@RequestBody QuestaoVF questaovf) {
        try {
            QuestaoVF questaoVF = questoesService.salvarQuestaoVF(questaovf);
            return ResponseEntity.ok(questaoVF);
        } catch (Error e) {
            if (e.getMessage().equals("Enviado campos em branco")) {
                return ResponseEntity.status(400).build();
            }
            return ResponseEntity.badRequest().build();
        }
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

    @GetMapping("/prova/{id}")
    public ResponseEntity<Prova> getProva(@PathVariable("id") Long id) {
        try {
            Prova prova = questoesService.retornarProvabyId(id);
            return ResponseEntity.ok(prova);
        } catch(ProvaNotFoundException notfound) {
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping("/prova")
    public List<Prova> ListaProva() {
        return questoesService.listaProva();
        }

    @PostMapping("/prova")
    public ResponseEntity<Long> criarProva(@RequestBody Prova prova) {
        Prova newprova = questoesService.criarProva(prova);
        return ResponseEntity.ok(newprova.getId());
    }

    @PostMapping("/prova/{id}/selecionar")
    public void criarProva(@PathVariable("id") Long id, @RequestBody Long turma_id) {
        System.out.println(turma_id);
    }
}
