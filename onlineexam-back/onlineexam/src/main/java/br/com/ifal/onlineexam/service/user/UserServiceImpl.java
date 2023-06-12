package br.com.ifal.onlineexam.service.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.Exceptions.TurmaNotFoundException;
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
    public Professor salvarProfessor(Professor professor) throws Error {
        if (professor.getNome().equals("") || professor.getSenha().equals("") || (professor.getEmail().equals(""))) {
            throw new Error("Campo mal preenchido");
        }
        Professor existeProfessor = TeacherRepository.findByEmail(professor.getEmail());
        if (existeProfessor != null) {
            throw new Error("Email já cadastrado");
        }

        return TeacherRepository.save(professor);
    }

    @Override
    public Aluno salvarAluno(Aluno aluno) throws Error {
        if (aluno.getNome().equals("") || aluno.getSenha().equals("") || (aluno.getEmail().equals(""))) {
            throw new Error("Campo mal preenchido");
        }
        Aluno existeAluno = StudentRepository.findByEmail(aluno.getEmail());
        if (existeAluno != null) {
            throw new Error("Email já cadastrado");
        }

        return StudentRepository.save(aluno);
    }

    @Override
    public Aluno atualizarAluno(Aluno aluno) throws Error{
        if (aluno.getNome().equals("") || (aluno.getEmail().equals(""))) {
            throw new Error("Campo mal preenchido");
        }
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
    public String deletarProfessor(Professor professor) {
    try {
        TeacherRepository.delete(professor);
    } catch (Error e) {
        return "Não foi possível excluir o Professor :(";
    }
        return "Professor Excluido com sucesso";
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
    public Disciplina retornarTurmabyId(Long turma_id) throws TurmaNotFoundException {
        return turmaRepository.findById(turma_id)
        .orElseThrow(() -> new TurmaNotFoundException(turma_id));
    }

    @Override
    public List<Disciplina> getAllDisciplinas(){
        return turmaRepository.findAll();
    }

    public List<String> findByEmailLogin(String email, String senha) throws Error{
        List<String> dados = new ArrayList<>();
        Aluno existeAluno = StudentRepository.findByEmail(email);
        Professor existeProfessor = TeacherRepository.findByEmail(email);
        if (existeAluno != null) {
            if (existeAluno.getSenha().equals(senha)) {
                dados.add(email);
                dados.add("Discente");
                return dados;
            } else {
                throw new Error("Senha Incorreta");
            }
            
        } else if (existeProfessor != null) {
            if (existeProfessor.getSenha().equals(senha)) {
                dados.add(email);
                dados.add("Docente");
                return dados;
            } else {
                throw new Error("Senha Incorreta");
            }
        } else {
            throw new Error("Email não cadastrado");
        }
    }

}
