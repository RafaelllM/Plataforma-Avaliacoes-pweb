package com.onlinexam.avaliacaoonline;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/")
public class UsuarioController {
    @Autowired
    UsuarioRepository repo;

    Usuario user = null;

    @GetMapping("/")
    public ModelAndView index() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index.html");
        return modelAndView;
    }

    @GetMapping("login")
    public ModelAndView login_vw() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login.html");
        return modelAndView;
    }

    @PostMapping("login")
    @ResponseBody
    RedirectView verificar_login(@RequestParam("email") String email, @RequestParam("senha") String senha) {
        String url = "http://localhost:8080/login";
        try {
            Usuario usuario = repo.findByEmailAndSenha(email, senha);
            if (usuario.getDiscente_docente().equals("docente")) {
                url = "http://localhost:8080/home";
                user = usuario;
            } else if (usuario.getDiscente_docente().equals("discente")) {
                url = "http://localhost:8080/home";
                user = usuario;
            }
        } catch (NullPointerException e) {
        }
        return new RedirectView(url);
    };

    @GetMapping("cadastro")
    public ModelAndView cadastro_vw() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("cadastro.html");
        return modelAndView;
    }

    @PostMapping("cadastro")
    @ResponseBody
    RedirectView cadastro(@RequestParam("email") String email, @RequestParam("senha") String senha,
            @RequestParam("nome") String nome,
            @RequestParam("discente_docente") String discente_docente) {
        Usuario novoUsuario = new Usuario();
        novoUsuario.setNome(nome);
        novoUsuario.setEmail(email);
        novoUsuario.setSenha(senha);
        novoUsuario.setDiscente_docente(discente_docente);
        repo.save(novoUsuario);
        user = novoUsuario;
        String url = "http://localhost:8080/home";
        return new RedirectView(url);
    };

    @GetMapping("home")
    @ResponseBody
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        if (user.getDiscente_docente().equals("docente")) {
            modelAndView.setViewName("docente.html");
        } else {
            modelAndView.setViewName("discente.html");
        }
        return modelAndView;
    }

    @GetMapping("turma")
    public ModelAndView turma_vw() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("turma.html");
        return modelAndView;
    }

}
