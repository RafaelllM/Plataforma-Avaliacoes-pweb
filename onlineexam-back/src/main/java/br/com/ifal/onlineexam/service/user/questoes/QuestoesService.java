package br.com.ifal.onlineexam.service.user.questoes;

import java.util.List;

import br.com.ifal.onlineexam.model.questoes.Questao;

public interface QuestoesService {

    public List<Questao> getAllQuestoes();

    public Questao SalvarQuestao(Questao questao);
}
