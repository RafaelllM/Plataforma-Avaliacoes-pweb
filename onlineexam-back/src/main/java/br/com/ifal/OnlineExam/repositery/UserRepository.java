package br.com.ifal.OnlineExam.repositery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import br.com.ifal.OnlineExam.model.User.*;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByEmail(String email);

}
