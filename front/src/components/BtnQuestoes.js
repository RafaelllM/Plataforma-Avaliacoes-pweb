import { Link } from 'react-router-dom';
import './css/BtnQuestoes.css';

export default function BtnQuestoes() {
    return (
        <header id='Container-btn'>
            <h3 className='btn-titulo'>
                Criar Questões:
            </h3>
            <Link to={'/Docente/Questoes/Abertas'} className='btn-option'>Questões Abertas</Link>
            <Link to={'/Docente/Questoes/Fechadas'} className='btn-option'>Questões Fechadas</Link>
            <Link to={'/Docente/Questoes/VF'} className='btn-option'>Questões V/F</Link>
        </header>
    )
}
