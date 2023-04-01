package com.onlinexam.avaliacaoonline;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/")
public class UsuarioController {
    @Autowired
    UsuarioRepository repo;

    @GetMapping("")
    public String login(Model model){
        return "login";
    }

    @PostMapping
    @ResponseBody
    Usuario add(@RequestParam("email") String email, @RequestParam("senha") String senha){
        Usuario novoUsuario = new Usuario();
        novoUsuario.setEmail(email);
        novoUsuario.setSenha(senha);
        return repo.save(novoUsuario);
    };

    @GetMapping("home")
    public String home(Model model){
        return "index";
    }

}
