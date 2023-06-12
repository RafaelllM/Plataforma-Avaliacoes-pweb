package br.com.ifal.onlineexam;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;
import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

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
    @Transactional
    public void setUp() {
        Aluno aluno = new Aluno();
        aluno.setNome("Set up");
        aluno.setEmail("testejpaonlineexamemail@teste.com");
        aluno.setSenha("123456");
        userService.salvarAluno(aluno);

        Professor prof = new Professor();
        prof.setNome("Set up");
        prof.setEmail("testejpaonlineexamemail@teste.com");
        prof.setSenha("123456");
        userService.salvarProfessor(prof);
    }

    @Test 
    @Rollback
    @Transactional
    public void test_Verificando_geracao_automatica_de_idAluno() {
        Aluno aluno2 = new Aluno();
        aluno2.setNome("Teste 1");
        aluno2.setEmail("testejpaonlineexam@teste.com");
        aluno2.setSenha("123456");
        userService.salvarAluno(aluno2);
        assertNotNull("O ID não pode ser nulo", aluno2.getId());
    }

    @Test 
    @Rollback
    @Transactional
    public void test_Verificando_geracao_automatica_de_idProfessor() {
        Professor professor2 = new Professor();
        professor2.setNome("Teste 1");
        professor2.setEmail("testejpaonlineexam@teste.com");
        professor2.setSenha("123456");
        userService.salvarProfessor(professor2);

        assertNotNull("O ID não pode ser nulo", professor2.getId());
    }

    @Test
    @Rollback
    @Transactional
    public void test_Verificando_Capacidade_De_Nao_Repeticao_Do_EmailAluno() {
        Aluno aluno = new Aluno();
        aluno.setNome("Teste 2");
        aluno.setEmail("testejpaonlineexamemail@teste.com");
        aluno.setSenha("123456");

        try {
            userService.salvarAluno(aluno);
        } catch (Error e) {
            assertEquals("Email já cadastrado", e.getMessage());
            return ;
        }
    }


    @Test
    @Rollback
    @Transactional
    public void test_Verificando_Capacidade_De_Nao_Repeticao_Do_Email_Professor() {
        Professor prof = new Professor();
        prof.setNome("Teste 2");
        prof.setEmail("testejpaonlineexamemail@teste.com");
        prof.setSenha("123456");

        try {
            userService.salvarProfessor(prof);
        } catch (Error e) {
            assertEquals("Email já cadastrado", e.getMessage());
            return ;
        }
    }

    @Test
    @Rollback
    @Transactional
    public void test_Verificando_Anotacao_NotBlank_Senha_Professor() {
        Professor prof = new Professor();
        prof.setNome("Teste 3");
        prof.setEmail("testejpaonlineexam@teste.com");
        prof.setSenha("");

        try {
            if (prof.getSenha().equals("")) {
                userService.salvarProfessor(prof);
            }else {
                fail();
            }
        } catch (Error er) {
            assertEquals("Campo mal preenchido", er.getMessage());
            return ;
        }
    }

    @Test
    @Rollback
    @Transactional
    public void test_Verificando_Anotacao_NotBlank_Senha_Aluno() {
        Aluno aluno = new Aluno();
        aluno.setNome("Teste 3");
        aluno.setEmail("testejpaonlineexam@teste.com");
        aluno.setSenha("");

        try {
            if (aluno.getSenha().equals("")) {
                userService.salvarAluno(aluno);
            }else {
                fail();
            }
        } catch (Error er) {
            assertEquals("Campo mal preenchido", er.getMessage());
            return ;
        }
    }

    
}
