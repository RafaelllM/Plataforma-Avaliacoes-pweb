const baseUrl = "http://localhost:8080";
const headers = { "Content-Type": "application/json" };

export async function createQuestao(data) {
    return await fetch(`${baseUrl}/questoes`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};