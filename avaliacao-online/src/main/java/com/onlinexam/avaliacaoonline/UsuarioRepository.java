package com.onlinexam.avaliacaoonline;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    @Query("SELECT u FROM Usuario u WHERE u.email = :email AND u.senha = :senha")
    Usuario findByEmailAndSenha(@Param("email") String email, @Param("senha") String senha) throws NullPointerException;
}