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
        Usuario novoUsuario = new Usuario();
        novoUsuario.setEmail(email);
        novoUsuario.setSenha(senha);
        repo.save(novoUsuario);
        String url = "http://localhost:8080/home";
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
        String url = "http://localhost:8080/home";
        return new RedirectView(url);
    };

    @GetMapping("home")
    @ResponseBody
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("home.html");
        return modelAndView;
    }

}
