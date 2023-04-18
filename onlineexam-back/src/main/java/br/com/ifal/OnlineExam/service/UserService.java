package br.com.ifal.OnlineExam.service;

import java.util.List;

import br.com.ifal.OnlineExam.model.User;

public interface UserService {
    public User saveStudent(User Student);

    public List<User> getAllStudents();
}
