package br.com.ifal.onlineexam.service.user.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.model.turma.Turma;
import br.com.ifal.onlineexam.model.user.Student;
import br.com.ifal.onlineexam.model.user.Teacher;
import br.com.ifal.onlineexam.model.user.User;
import br.com.ifal.onlineexam.repository.userrepository.StudentRepository;
import br.com.ifal.onlineexam.repository.userrepository.TeacherRepository;
import br.com.ifal.onlineexam.repository.userrepository.TurmaRepository;
import br.com.ifal.onlineexam.repository.userrepository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    public List<Student> alunos = new ArrayList<Student>();

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TeacherRepository TeacherRepository;
    @Autowired
    private StudentRepository StudentRepository;
    @Autowired
    private TurmaRepository turmaRepository;

    @Override
    public List<Student> getAllStudents() {
        return StudentRepository.findAll();
    }

    @Override
    public Teacher SalvarProfessor(Teacher professor) {
        return TeacherRepository.save(professor);
    }

    @Override
    public Student SalvarAluno(Student aluno) {
        return StudentRepository.save(aluno);
    }

    @Override
    public Student AtualizarAluno(Student aluno) {
        return StudentRepository.save(aluno);
    }

    @Override
    public String DeletarAluno(Student aluno) {
        userRepository.delete(aluno);
        return "Aluno Excluido com sucesso";
    }

    @Override
    public boolean VerificarEmail(String email) {
        Optional<User> usuario = userRepository.findByEmail(email);
        return usuario.isPresent();
    }

    @Override
    public Optional<User> VerificarLogin(String email, String senha) {
        Optional<User> usuario = userRepository.findByEmail(email);
        if (usuario.get().getSenha().equals(senha)) {
            return usuario;
        } else {
            return null;
        }
    }

    @Override
    public Turma CriarTurma(Turma turma) {
        return turmaRepository.save(turma);
    }

}
