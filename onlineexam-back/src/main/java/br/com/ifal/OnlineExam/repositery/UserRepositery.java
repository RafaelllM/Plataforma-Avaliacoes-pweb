package br.com.ifal.OnlineExam.repositery;

import br.com.ifal.OnlineExam.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositery extends JpaRepository<User, Long> {

}
