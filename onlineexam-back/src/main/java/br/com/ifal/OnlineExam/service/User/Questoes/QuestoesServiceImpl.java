package br.com.ifal.OnlineExam.service.User.Questoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.ifal.OnlineExam.model.Questoes.Questao;
import br.com.ifal.OnlineExam.repositery.QuestoesRepository;

@Service
public class QuestoesServiceImpl implements QuestoesService {

    @Autowired
    private QuestoesRepository questoesRepository;

    @Override
    public Questao SalvarQuestao(Questao questao) {
        return questoesRepository.save(questao);
    }
}
