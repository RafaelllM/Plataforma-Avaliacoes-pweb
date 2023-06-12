import './App.css';
import Cadastro from './pages/Cadastro';
import Docente from './pages/Docente';
import Login from './pages/Login'
import Questoes from './pages/Questoes';
import QuestoesAbertas from './pages/QuestoesAbertas';
import QuestoesFechadas from './pages/QuestoesFechadas';
import QuestoesVF from './pages/QuestoesVF';
import GerarProva from './components/GerarProva';
import ProvaId from './pages/ProvaId'
import SelecionarDisciplinaProva from './components/SelecionarDisciplinaProva';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TurmaId from './pages/TurmaId';
import ListaAlunos from './components/ListaAlunos';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Cadastro/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path='/Docente' element={<Docente/>} />
        <Route exact path='/Docente/Turma' element={<ListaAlunos/>} />
        <Route exact path='/Docente/Turma/:id' element={<TurmaId/>} />
        <Route exact path="/Docente/Questoes" element={<Questoes/>} />
        <Route exact path="/Docente/Questoes/Abertas" element={<QuestoesAbertas/>} />
        <Route exact path="/Docente/Questoes/Fechadas" element={<QuestoesFechadas/>} />
        <Route exact path="/Docente/Questoes/VF" element={<QuestoesVF/>} />
        <Route exact path="/Docente/Questoes/CriarProva" element={<GerarProva/>} />
        <Route exact path="/Docente/Questoes/Prova" element={<GerarProva/>} />
        <Route exact path="/Docente/Questoes/Prova/:id/Selecionar" element={<SelecionarDisciplinaProva/>} />
        <Route exact path="/Docente/Questoes/Prova/:id" element={<ProvaId/>} />
      </Routes>
    </Router>
  );
}

export default App;
