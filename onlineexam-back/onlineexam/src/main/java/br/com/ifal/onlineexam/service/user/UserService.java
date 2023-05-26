package br.com.ifal.onlineexam.service.user;

import java.lang.String;
import java.util.List;

import br.com.ifal.onlineexam.model.user.Aluno;
import br.com.ifal.onlineexam.model.user.Professor;

public interface UserService {

    public List<Aluno> getAllStudents();

    public Professor SalvarProfessor(Professor professor);

    public Aluno SalvarAluno(Aluno aluno);

    public String DeletarAluno(Aluno aluno);

    public Aluno AtualizarAluno(Aluno aluno);


}
