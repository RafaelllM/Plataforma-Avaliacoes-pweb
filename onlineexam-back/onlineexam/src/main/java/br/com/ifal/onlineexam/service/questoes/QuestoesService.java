package br.com.ifal.onlineexam.service.questoes;

import java.util.List;

import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;

public interface QuestoesService {

    public List<Object> getAllQuestoes();

    public List<QuestaoAberta> getAllQuestaoAbertas();

    public List<QuestaoFechada> getAllQuestaoFechadas();

    public List<QuestaoVF> getAllQuestaoVFs();

}

