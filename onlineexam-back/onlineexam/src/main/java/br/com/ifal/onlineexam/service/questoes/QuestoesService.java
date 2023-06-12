package br.com.ifal.onlineexam.service.questoes;

import java.util.List;

import br.com.ifal.onlineexam.model.questoes.Prova;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoProva;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;

public interface QuestoesService {

    public List<QuestaoAberta> getAllQuestaoAbertas();

    public List<QuestaoFechada> getAllQuestaoFechadas();

    public List<QuestaoVF> getAllQuestaoVFs();

    public QuestaoAberta salvarQuestaoAberta(QuestaoAberta questao);

    public String deletarQuestaoAberta(QuestaoAberta questao);

    public QuestaoFechada salvarQuestaoFechada(QuestaoFechada questao);

    public String deletarQuestaoFechada(QuestaoFechada questao);

    public QuestaoVF salvarQuestaoVF(QuestaoVF questao);

    public String deletarQuestaoVF(QuestaoVF questao);

    public String salvarQuestaoProva(QuestaoProva questao);

    public List<Prova> listaProva();

    public Prova criarProva(Prova prova);

    public Prova retornarProvabyId(Long prova);

}

