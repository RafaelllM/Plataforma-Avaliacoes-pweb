package br.com.ifal.OnlineExam.service.User.User;

import java.util.List;
import java.util.Optional;

import br.com.ifal.OnlineExam.model.User.*;

public interface UserService {

    public List<User> getAllStudents();

    public User SalvarUsuario(User user);

    public String DeletarAluno(User user);

    public boolean VerificarEmail(String email);

    public Optional<User> VerificarLogin(String email, String senha);

}
