package br.com.ifal.onlineexam.service.user.user;

import java.util.List;
import java.util.Optional;

import br.com.ifal.onlineexam.model.user.Student;
import br.com.ifal.onlineexam.model.user.Teacher;
import br.com.ifal.onlineexam.model.user.User;

public interface UserService {

    public List<User> getAllStudents();

    public User SalvarUsuario(User user);

    public Teacher SalvarProfessor(Teacher professor);

    public Student SalvarAluno(Student aluno);

    public String DeletarAluno(Student user);

    public Student AtualizarAluno(Student user);

    public boolean VerificarEmail(String email);

    public Optional<User> VerificarLogin(String email, String senha);

}
