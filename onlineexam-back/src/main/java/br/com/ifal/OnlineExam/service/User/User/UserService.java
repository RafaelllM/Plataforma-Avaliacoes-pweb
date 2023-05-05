package br.com.ifal.OnlineExam.service.User.User;

import br.com.ifal.OnlineExam.model.User.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public List<User> getAllStudents();

    public User SalvarUsuario(User user);

    public String DeletarAluno(User user);

    public boolean VerificarEmail(String email);

    public Optional<User> VerificarLogin(String email, String senha);

}
