import "./css/Docente.css";

import { Link } from 'react-router-dom'
import OpenIconSpeedDial from '../components/AdicionarTurma'

function Docente() {
    return (
        <body id="home">
            <section id="provas">
                <div className="btn-box">
                    <Link className="btn-criar" to={'/Docente/Questoes'}>Gerenciamento de Questões</Link>
                </div>
                <div>
                    <h3>Provas</h3>
                </div>
            </section>
            <section id="turmas">
                <div>
                    <h3 className="turma-header">Suas Turmas</h3>
                    <OpenIconSpeedDial/>
                </div>
            </section>
        </body>
    )
}

export default Docente;