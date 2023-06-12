import "./css/Docente.css";

import { Link } from 'react-router-dom'
import ListaTurmas from "../components/ListaTurmas";
import ListaProvasPorTurma from "../components/ListaProvasPorTurma"

function Docente() {
    return (
        <div id="home">
            <section id="provas">
                <div className="btn-box">
                    <Link className="btn-criar" to={'/Docente/Questoes'}>Gerenciamento de Questões</Link>
                </div>
                <div>
                    <h3>Provas disponíveis</h3>
                    <ListaProvasPorTurma/>
                </div>
            </section>
            <section id="turmas">
                <div>
                    <h3 className="turma-header">Suas Turmas</h3>
                    <ListaTurmas/>
                </div>
            </section>
        </div>
    )
}

export default Docente;