export async function Criar (Newdata) {
    let urlApi = 'http://localhost:3001/api/oportunidades'
    
    try {
        const dados = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(Newdata)
        })

        const dadosJson = await dados.json()
        return dadosJson

    } catch (error) {
        console.error('Erro:', error);
    }
}