let urlApi ='http://localhost:3001/api/oportunidades'

export async function Listar () {
    try{

        const dados = await fetch (urlApi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!dados.ok) {
            throw new Error('Network response not ok');
        }

        const dadosJson = await dados.json()
        return dadosJson

    } catch (error) {
        console.error('Erro:', error)
        return []
    }
}