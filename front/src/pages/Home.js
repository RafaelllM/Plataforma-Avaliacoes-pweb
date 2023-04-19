import "./Home.css";

import { Link } from 'react-router-dom'

function Home() {
    return (
        <body id="home">
            <section id="provas">
                <div className="btn-box">
                    <Link className="btn-criar" to={'/provas'}>Criar prova</Link>
                </div>
                <div>
                    <h3>Provas Antigas</h3>
                </div>
            </section>
            <section id="turmas">
                <div>
                    <h3 className="turma-header">Suas Turmas</h3>
                </div>
            </section>
        </body>
    )
}

export default Home;