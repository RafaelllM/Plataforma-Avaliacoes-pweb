import { useEffect, useState } from "react";
import "./ListaAlunos.css";
import axios from "axios"


function ListaAlunos() {

    const [alunos, setAlunos] = useState([]);

    useEffect( () => {
        loadAlunos();
    }, []);

    const loadAlunos = async () =>{
        const result = await axios.get("http://localhost:8080/turma")
        setAlunos(result.data)
    }

    return (
            <div id="Turma">
                <div className="container-table">
                    <table className="table-alunos">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alunos.map((aluno, index) =>(
                                <tr>
                                <td key={index}><strong>{index + 1}</strong></td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default ListaAlunos;