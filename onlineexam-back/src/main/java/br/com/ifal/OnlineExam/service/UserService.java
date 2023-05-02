package br.com.ifal.OnlineExam.service;

import java.util.List;

import br.com.ifal.OnlineExam.model.User;

public interface UserService {

    public User SalvarUsuario(User user);
    
    public String EditarUsuario(User aluno);
    
    public boolean VerificarEmail(String email);

    public List<User> getAllStudents();
}
