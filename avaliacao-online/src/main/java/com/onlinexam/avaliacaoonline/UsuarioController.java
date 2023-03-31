package com.onlinexam.avaliacaoonline;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @GetMapping("home")
    public String home(Model model){
        return "index";
    }

    
    @PostMapping @ResponseBody Usuario add(Usuario nUsuario){
        Usuario novoUsuario = new Usuario();
        novoUsuario.setEmail();
        novoUsuario.setSenha();
        return repo.save(novoUsuario);
            
        };
    }
}
