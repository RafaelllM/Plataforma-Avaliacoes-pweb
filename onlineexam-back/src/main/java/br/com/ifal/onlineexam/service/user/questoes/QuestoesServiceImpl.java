package br.com.ifal.onlineexam.service.user.questoes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.model.questoes.Questao;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestoesAbertaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestoesFechadasRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestoesVFRepository;

@Service
public class QuestoesServiceImpl implements QuestoesService {

    public List<Questao> questoes = new ArrayList<Questao>();

    @Autowired
    private QuestoesAbertaRepository questoesAbertaRepository;
    @Autowired
    private QuestoesFechadasRepository questoesFechadasRepository;
    @Autowired
    private QuestoesVFRepository questoesVFRepository;

    @Override
    public Questao SalvarQuestaoAberta(QuestaoAberta questao) {
        return questoesAbertaRepository.save(questao);
    }

    @Override
    public Questao SalvarQuestaoFechada(QuestaoFechada questao) {
        return questoesFechadasRepository.save(questao);
    }

    @Override
    public Questao SalvarQuestaoVF(QuestaoVF questao) {
        return questoesVFRepository.save(questao);
    }

    @Override
    public List<QuestaoAberta> getAllQuestaoAbertas() {
        return questoesAbertaRepository.findAll();
    }

    @Override
    public List<QuestaoFechada> getAllQuestaoFechadas() {
        return questoesFechadasRepository.findAll();
    }

    @Override
    public List<QuestaoVF> getAllQuestaoVFs() {
        return questoesVFRepository.findAll();
    }

    @Override
    public List<Object> getAllQuestoes() {
        List<QuestaoAberta> Aberta = questoesAbertaRepository.findAll();
        List<QuestaoFechada> Fechada = questoesFechadasRepository.findAll();
        List<QuestaoVF> VF = questoesVFRepository.findAll();
        List<Object> tudo = new ArrayList<>();
        tudo.addAll(Aberta);
        tudo.addAll(Fechada);
        tudo.addAll(VF);
        return tudo;
    }
}
