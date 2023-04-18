package br.com.ifal.OnlineExam.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.OnlineExam.model.User;
import br.com.ifal.OnlineExam.repositery.UserRepositery;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepositery userRepositery;

    @Override
    public User saveStudent(User user) {
        return userRepositery.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepositery.findByEmail(email);
    }

    @Override
    public List<User> getAllStudents() {
        return userRepositery.findAll();
    }
}
