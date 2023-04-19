import './App.css';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Provas from './pages/Provas'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Cadastro/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/provas' element={<Provas/>} />
      </Routes>
    </Router>
  );
}

export default App;
