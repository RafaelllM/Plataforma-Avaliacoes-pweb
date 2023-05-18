package br.com.ifal.onlineexam.service.user.user;

import java.util.List;
import java.util.Optional;

import br.com.ifal.onlineexam.model.turma.Turma;
import br.com.ifal.onlineexam.model.user.Student;
import br.com.ifal.onlineexam.model.user.Teacher;
import br.com.ifal.onlineexam.model.user.User;

public interface UserService {

    public Turma CriarTurma(Turma turma);

    public List<Student> getAllStudents();

    public Teacher SalvarProfessor(Teacher professor);

    public Student SalvarAluno(Student aluno);

    public String DeletarAluno(Student user);

    public Student AtualizarAluno(Student user);

    public boolean VerificarEmail(String email);

    public Optional<User> VerificarLogin(String email, String senha);

}
