package br.com.ifal.OnlineExam.repositery;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ifal.OnlineExam.model.User;

@Repository
public interface UserRepositery extends JpaRepository<User, Long> {

    public Optional<User> findByEmail(String email);

}
