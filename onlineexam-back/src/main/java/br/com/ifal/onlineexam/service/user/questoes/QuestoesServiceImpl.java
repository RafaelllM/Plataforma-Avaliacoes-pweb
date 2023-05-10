package br.com.ifal.onlineexam.service.user.questoes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.model.questoes.Questao;
import br.com.ifal.onlineexam.repositery.QuestoesRepository;

@Service
public class QuestoesServiceImpl implements QuestoesService {

    public List<Questao> questoes = new ArrayList<Questao>();

    @Autowired
    private QuestoesRepository questoesRepository;

    @Override
    public Questao SalvarQuestao(Questao questao) {
        return questoesRepository.save(questao);
    }

    @Override
    public List<Questao> getAllQuestoes() {
        return questoesRepository.findAll();
    }
}
