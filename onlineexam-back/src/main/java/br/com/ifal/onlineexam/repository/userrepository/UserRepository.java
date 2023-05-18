package br.com.ifal.onlineexam.repository.userrepository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.ifal.onlineexam.model.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByEmail(String email);

}
