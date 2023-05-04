const baseUrl = "http://localhost:8080";
const headers = { "Content-Type": "application/json" };

export async function create(data) {
    return await fetch(`${baseUrl}/questoes/fechadas`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};