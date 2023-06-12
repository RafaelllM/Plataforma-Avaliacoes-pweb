package br.com.ifal.onlineexam.service.user;

import java.util.List;

import br.com.ifal.onlineexam.model.turma.Disciplina;
import br.com.ifal.onlineexam.model.user.Aluno;
import br.com.ifal.onlineexam.model.user.Professor;

public interface UserService {

    public Professor salvarProfessor(Professor professor);

    public Aluno salvarAluno(Aluno aluno);

    public String deletarProfessor(Professor professor);

    public String deletarAluno(Aluno aluno);

    public Aluno atualizarAluno(Aluno aluno);

    public List<Aluno> getAllAlunos();

    public Disciplina criarTurma(Disciplina turma);

    public Disciplina retornarTurmabyId(Long turma_id);
    
    public List<Disciplina> getAllDisciplinas();

}
