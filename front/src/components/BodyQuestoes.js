import './css/BodyQuestoes.css';
import { Link } from 'react-router-dom';

export default function BodyQuestoes() {
    return (
        <section id='BodyQuestoes'>
            <div className='parte1'>
                <div className='margin-btn-gerar-prova'>
                <Link to={'/Docente/Questoes/Prova'} className='btn-gerar-prova'>
                    Gerar prova
                </Link>
                </div>
                <h3>
                    Suas provas
                </h3>
            </div>
            <div className='parte2'>
                <h3>
                    Banco de Questões
                </h3>
            </div>
        </section>
    )
}