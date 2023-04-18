package br.com.ifal.OnlineExam.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.OnlineExam.model.User;
import br.com.ifal.OnlineExam.repositery.UserRepositery;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepositery studentRepositery;

    @Override
    public User saveStudent(User student) {
        return studentRepositery.save(student);
    }

    @Override
    public List<User> getAllStudents() {
        return studentRepositery.findAll();
    }
}
