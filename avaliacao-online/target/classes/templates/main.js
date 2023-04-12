import React, { useState } from 'react';

function CriadorProva() {
  const [questoes, setQuestoes] = useState([]);

  const adicionarQuestao = () => {
    setQuestoes([...questoes, { tipo: 'texto', pergunta: '', respostas: [] }]);
  };

  const atualizarPergunta = (index, pergunta) => {
    const novaQuestao = { ...questoes[index], pergunta };
    const novasQuestoes = [...questoes];
    novasQuestoes[index] = novaQuestao;
    setQuestoes(novasQuestoes);
  };

  const adicionarResposta = (index) => {
    const novaQuestao = { ...questoes[index], respostas: [...questoes[index].respostas, ''] };
    const novasQuestoes = [...questoes];
    novasQuestoes[index] = novaQuestao;
    setQuestoes(novasQuestoes);
  };

  const atualizarResposta = (questaoIndex, respostaIndex, resposta) => {
    const novaQuestao = { ...questoes[questaoIndex], respostas: [...questoes[questaoIndex].respostas] };
    novaQuestao.respostas[respostaIndex] = resposta;
    const novasQuestoes = [...questoes];
    novasQuestoes[questaoIndex] = novaQuestao;
    setQuestoes(novasQuestoes);
  };

  const mudarTipoQuestao = (index, tipo) => {
    const novaQuestao = { ...questoes[index], tipo, respostas: [] };
    const novasQuestoes = [...questoes];
    novasQuestoes[index] = novaQuestao;
    setQuestoes(novasQuestoes);
  };

  const removerQuestao = (index) => {
    const novasQuestoes = [...questoes];
    novasQuestoes.splice(index, 1);
    setQuestoes(novasQuestoes);
  };

  const gerarProvaHtml = () => {
    let html = '<h1>Prova Online</h1>';
    for (let i = 0; i < questoes.length; i++) {
      const questao = questoes[i];
      html += `<div><p>${questao.pergunta}</p>`;
      if (questao.tipo === 'texto') {
        html += `<input type="text" />`;
      } else {
        for (let j = 0; j < questao.respostas.length; j++) {
          html += `<input type="radio" name="questao-${i}" value="${j}" /> ${questao.respostas[j]} <br />`;
        }
      }
      html += `</div>`;
    }
    return html;
  };

  return (
    <div>
      <button onClick={adicionarQuestao}>Adicionar Questão</button>
      {questoes.map((questao, index) => (
        <div key={index}>
          <p>Pergunta:</p>
          <textarea value={questao.pergunta} onChange={(e) => atualizarPergunta(index, e.target.value)} />
          <p>Tipo de Questão:</p>
          <select value={questao.tipo} onChange={(e) => mudarTipoQuestao(index, e.target.value)}>
            <option value="texto">Resposta em Texto</option>
            <option value="multipla">Resposta Múltipla Escolha</option>
