package br.com.ifal.onlineexam.service.user;

import java.lang.String;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.model.user.Aluno;
import br.com.ifal.onlineexam.model.user.Professor;
import br.com.ifal.onlineexam.repository.userrepository.StudentRepository;
import br.com.ifal.onlineexam.repository.userrepository.TeacherRepository;

@Service
public class UserServiceImpl implements UserService {

    public List<Aluno> alunos = new ArrayList<Aluno>();

    @Autowired
    private TeacherRepository TeacherRepository;
    @Autowired
    private StudentRepository StudentRepository;

    @Override
    public List<Aluno> getAllStudents() {
        return StudentRepository.findAll();
    }

    @Override
    public Professor SalvarProfessor(Professor professor) {
        return TeacherRepository.save(professor);
    }

    @Override
    public Aluno SalvarAluno(Aluno aluno) {
        return StudentRepository.save(aluno);
    }

    @Override
    public Aluno AtualizarAluno(Aluno aluno) {
        return StudentRepository.save(aluno);
    }

    @Override
    public String DeletarAluno(Aluno aluno) {
        StudentRepository.delete(aluno);
        return "Aluno Excluido com sucesso";
    }

}
