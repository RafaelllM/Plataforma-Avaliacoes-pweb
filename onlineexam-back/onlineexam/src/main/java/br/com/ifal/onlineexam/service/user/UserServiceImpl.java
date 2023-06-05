package br.com.ifal.onlineexam.service.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.model.turma.Disciplina;
import br.com.ifal.onlineexam.model.user.Aluno;
import br.com.ifal.onlineexam.model.user.Professor;
import br.com.ifal.onlineexam.repository.userrepository.StudentRepository;
import br.com.ifal.onlineexam.repository.userrepository.TeacherRepository;
import br.com.ifal.onlineexam.repository.userrepository.TurmaRepository;

@Service
public class UserServiceImpl implements UserService {

    public List<Aluno> alunos = new ArrayList<Aluno>();

    public List<Disciplina> turmas = new ArrayList<Disciplina>();

    @Autowired
    private TeacherRepository TeacherRepository;
    @Autowired
    private StudentRepository StudentRepository;
    @Autowired
    private TurmaRepository turmaRepository;

    @Override
    public Professor salvarProfessor(Professor professor) {
        Professor existeProfessor = TeacherRepository.findByEmail(professor.getEmail());

        if (existeProfessor != null) {
            throw new Error("Email já cadastrado");
        }

        return TeacherRepository.save(professor);
    }

    @Override
    public Aluno salvarAluno(Aluno aluno) {

        Aluno existeAluno = StudentRepository.findByEmail(aluno.getEmail());

        if (existeAluno != null) {
            throw new Error("Email já cadastrado");
        }

        return StudentRepository.save(aluno);
    }

    @Override
    public Aluno atualizarAluno(Aluno aluno) {
        return StudentRepository.save(aluno);
    }

    @Override
    public String deletarAluno(Aluno aluno) {
    try {
        StudentRepository.delete(aluno);
    } catch (Error e) {
        return "Não foi possível excluir o Aluno :(";
    }
        return "Aluno Excluido com sucesso";
    }

    @Override
    public List<Aluno> getAllAlunos() {
        return StudentRepository.findAll();
    }

    @Override
    public Disciplina criarTurma(Disciplina turma) {
        return turmaRepository.save(turma);
    }

    @Override
    public List<Disciplina> getAllDisciplinas(){
        return turmaRepository.findAll();
    }

}
