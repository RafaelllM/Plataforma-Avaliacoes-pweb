package br.com.ifal.onlineexam.service.questoes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.onlineexam.Exceptions.ProvaNotFoundException;
import br.com.ifal.onlineexam.model.questoes.Prova;
import br.com.ifal.onlineexam.model.questoes.QuestaoAberta;
import br.com.ifal.onlineexam.model.questoes.QuestaoFechada;
import br.com.ifal.onlineexam.model.questoes.QuestaoProva;
import br.com.ifal.onlineexam.model.questoes.QuestaoVF;
import br.com.ifal.onlineexam.repository.repositoryquestoes.ProvaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoAbertaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoFechadaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoProvaRepository;
import br.com.ifal.onlineexam.repository.repositoryquestoes.QuestaoVFRepository;

@Service
public class QuestoesServiceImpl implements QuestoesService {

    @Autowired
    private QuestaoAbertaRepository questoesAbertaRepository;
    @Autowired
    private QuestaoFechadaRepository questoesFechadasRepository;
    @Autowired
    private QuestaoVFRepository questoesVFRepository;
    @Autowired
    private QuestaoProvaRepository questaoprovaRepository;
    @Autowired
    private ProvaRepository provaRepository;

    @Override
    public QuestaoAberta salvarQuestaoAberta(QuestaoAberta questao) throws Error {
        if (questao.getAssunto().equals("") || questao.getEnunciado().equals("")) {
            throw new Error("Enviado campos em branco");
        }
        return questoesAbertaRepository.save(questao);
    }

    @Override
    public String deletarQuestaoAberta(QuestaoAberta questao) {
        try {
            questoesAbertaRepository.delete(questao);
            return "Questão apagada com sucesso";
        } catch (Error e) {
            return "Questão não conseguiu ser apagada :(";
        }
    }

    @Override
    public QuestaoFechada salvarQuestaoFechada(QuestaoFechada questao) {
        if (questao.getAssunto().equals("") || questao.getEnunciado().equals("") 
        || questao.getResposta_correta() == ' ') {
            throw new Error("Enviado campos em branco");
        }
        return questoesFechadasRepository.save(questao);
    }

    @Override
    public String deletarQuestaoFechada(QuestaoFechada questao) {
        try {
            questoesFechadasRepository.delete(questao);
            return "Questão apagada com sucesso";
        } catch (Error e) {
            return "Questão não conseguiu ser apagada :(";
        }
    }

    @Override
    public QuestaoVF salvarQuestaoVF(QuestaoVF questao) {
        if (questao.getAssunto().equals("") || questao.getEnunciado().equals("")) {
            throw new Error("Enviado campos em branco");
        }
        return questoesVFRepository.save(questao);
    }

    @Override
    public String deletarQuestaoVF(QuestaoVF questao) {
        try {
            questoesVFRepository.delete(questao);
        } catch (Error e) {
            return "Questão não conseguiu ser apagada :(";
        }
        return "Questão apagada com sucesso";
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
    public String salvarQuestaoProva(QuestaoProva questao){
        if (questaoprovaRepository.findById(questao.getId()).isEmpty()){
            questaoprovaRepository.save(questao);
            return "Questao Salva";
        } else {
            return "Questao já esta no banco de dados";
        }
    }

    @Override
    public List<Prova> listaProva(){
        return provaRepository.findAll();
    }

    @Override
    public Prova criarProva(Prova prova){
        return provaRepository.save(prova);
    }

    @Override
    public Prova retornarProvabyId(Long prova_id) throws ProvaNotFoundException {
        return provaRepository.findById(prova_id)
        .orElseThrow(() -> new ProvaNotFoundException(prova_id));
        }

}
