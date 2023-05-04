const baseUrl = "http://localhost:8080";
const headers = { "Content-Type": "application/json" };

export async function create(data) {
    return await fetch(`${baseUrl}/cadastro`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function update(data) {
    return await fetch(`${baseUrl}/turma`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function deletar(data) {
    return await fetch(`${baseUrl}/turma`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(data)
    });
};