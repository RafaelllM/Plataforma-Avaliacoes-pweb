import ListaQuestoes from './ListaQuestoes';
import ListaProvas from './ListaProvas';
import './css/BodyQuestoes.css';
import { Link } from 'react-router-dom';

export default function BodyQuestoes() {
    return (
        <section id='BodyQuestoes'>
            <div className='parte1'>
                <div className='margin-btn-gerar-prova'>
                <Link to={'/Docente/Questoes/CriarProva'} className='btn-gerar-prova'>
                    Gerar prova
                </Link>
                </div>
                <h3>
                    Provas a serem aplicadas
                </h3>
                <ListaProvas/>
            </div>
            <div className='parte2'>
                <h3>
                    Banco de Questões
                </h3>
                <ListaQuestoes/>
            </div>
        </section>
    )
}