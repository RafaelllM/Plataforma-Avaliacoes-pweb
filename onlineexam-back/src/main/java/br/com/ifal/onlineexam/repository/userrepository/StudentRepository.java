package br.com.ifal.onlineexam.repository.userrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.user.User;

public interface StudentRepository extends JpaRepository<User, Long> {

}
