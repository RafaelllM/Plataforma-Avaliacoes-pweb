const baseUrl = "http://localhost:8080";
const headers = { "Content-Type": "application/json" };

export async function create_turma(data) {
    console.log(JSON.stringify(data))
    return await fetch(`${baseUrl}/turma`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
}
    
export async function create_professor(data) {
    return await fetch(`${baseUrl}/cadastro/professor`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function create_aluno(data) {
    return await fetch(`${baseUrl}/cadastro/aluno`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function login_aluno_professor(data) {
    return await fetch(`${baseUrl}/Login`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function update(data) {
    return await fetch(`${baseUrl}/alunos`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function deletar(data) {
    return await fetch(`${baseUrl}/alunos`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(data)
    });
};
