package br.com.ifal.onlineexam.service.user.questoes;

import java.util.List;

import br.com.ifal.onlineexam.model.questoes.Questao;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;

public interface QuestoesService {

    public List<Object> getAllQuestoes();

    public List<QuestaoAberta> getAllQuestaoAbertas();

    public List<QuestaoFechada> getAllQuestaoFechadas();

    public List<QuestaoVF> getAllQuestaoVFs();

    public Questao SalvarQuestaoAberta(QuestaoAberta questao);

    public Questao SalvarQuestaoFechada(QuestaoFechada questao);

    public Questao SalvarQuestaoVF(QuestaoVF questao);

}
