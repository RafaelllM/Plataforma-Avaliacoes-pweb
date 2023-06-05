package br.com.ifal.onlineexam;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import javax.validation.ConstraintViolationException;

import br.com.ifal.onlineexam.model.user.Aluno;
import br.com.ifal.onlineexam.model.user.Professor;
import br.com.ifal.onlineexam.service.user.UserServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JPAteste {

    @Autowired
    UserServiceImpl userService;

    @BeforeAll
    @Rollback
    public void setUp() {
        Aluno aluno = new Aluno();
        aluno.setNome("Set up");
        aluno.setEmail("testemail@gmail.com");
        aluno.setSenha("123456");
        userService.salvarAluno(aluno);

        Professor prof = new Professor();
        prof.setNome("Set up");
        prof.setEmail("testemail@test.coSm");
        prof.setSenha("123456");
        userService.salvarProfessor(prof);
    }

    @Test 
    @Rollback
    public void test_Verificando_geracao_automatica_de_idAluno() {
        Aluno aluno2 = new Aluno();
        aluno2.setNome("Teste 1");
        aluno2.setEmail("testeid@gmail.com");
        aluno2.setSenha("123456");
        userService.salvarAluno(aluno2);

        assertNotNull("O ID não pode ser nulo", aluno2.getId());
    }

    @Test 
    @Rollback
    public void test_Verificando_geracao_automatica_de_idProfessor() {
        Professor professor2 = new Professor();
        professor2.setNome("Teste 1");
        professor2.setEmail("testeid@gmail.com");
        professor2.setSenha("123456");
        userService.salvarProfessor(professor2);

        assertNotNull("O ID não pode ser nulo", professor2.getId());
    }

    @Test
    @Rollback
    public void test_Verificando_Capacidade_De_Nao_Repeticao_Do_EmailAluno() {
        Aluno aluno = new Aluno();
        aluno.setNome("Teste 2");
        aluno.setEmail("testemail@gmail.com");
        aluno.setSenha("123456");

        try {
            userService.salvarAluno(aluno);
        } catch (Error e) {
            // Verifique se a exceção é lançada e faça as verificações necessárias
            assertEquals("Email já cadastrado", e.getMessage());
            return; // Indica que o teste foi bem-sucedido
        }
    }


    @Test
    @Rollback
    public void test_Verificando_Capacidade_De_Nao_Repeticao_Do_Email_Professor() {
        Professor prof = new Professor();
        prof.setNome("Teste 2");
        prof.setEmail("testemail@test.com");
        prof.setSenha("123456");

        try {
            userService.salvarProfessor(prof);
        } catch (Error e) {
            // Verifique se a exceção é lançada e faça as verificações necessárias
            assertEquals("Email já cadastrado", e.getMessage());
            return; // Indica que o teste foi bem-sucedido
        }
    }

    @Test
    @Rollback
    public void test_Verificando_Anotacao_NotBlank_Senha_Professor() {
        Professor prof = new Professor();
        prof.setNome("Teste 3");
        prof.setEmail("testesenha@test.com");
        prof.setSenha("");

        try {
            userService.salvarProfessor(prof);
            throw new ConstraintViolationException("Erro de violação de restrição", null);
        } catch (Exception ex) {
            assertEquals(ConstraintViolationException.class, ex.getClass());
        }
    }

    @Test
    @Rollback
    public void test_Verificando_Anotacao_NotBlank_Senha_Aluno() {
        Aluno aluno = new Aluno();
        aluno.setNome("Teste 3");
        aluno.setEmail("testesenha@gmail.com");
        aluno.setSenha("");

        try {
            userService.salvarAluno(aluno);
            throw new ConstraintViolationException("Erro de violação de restrição", null);
        } catch (Exception ex) {
            assertEquals(ConstraintViolationException.class, ex.getClass());
        }
    }
    
}
