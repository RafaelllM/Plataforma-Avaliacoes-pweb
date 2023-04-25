package br.com.ifal.OnlineExam.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.OnlineExam.model.User;
import br.com.ifal.OnlineExam.repositery.UserRepositery;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepositery userRepositery;

    @Override
    public User SalvarUsuario(User user) {
        return userRepositery.save(user);
    }

    @Override
    public boolean VerificarEmail(String email) {
        Optional<User> usuario = userRepositery.findByEmail(email);
        return usuario.isPresent();
    }

    @Override
    public List<User> getAllStudents() {
        return userRepositery.findAll();
    }
}
