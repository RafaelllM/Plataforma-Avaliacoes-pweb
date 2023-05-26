package br.com.ifal.onlineexam.service.questoes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.model.questoes.Questao;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoAbertaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoFechadaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoVFRepository;

@Service
public class QuestoesServiceImpl implements QuestoesService {

    public List<Questao> questoes = new ArrayList<Questao>();

    @Autowired
    private QuestaoAbertaRepository questoesAbertaRepository;
    @Autowired
    private QuestaoFechadaRepository questoesFechadasRepository;
    @Autowired
    private QuestaoVFRepository questoesVFRepository;

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
