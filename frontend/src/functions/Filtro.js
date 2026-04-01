export async function Filtro(filtros = {}) {
    try {
        const { status, cliente } = filtros
        
        let url = 'http://localhost:3001/api/oportunidades?'
        
        if (status) {
            url += `status=${status}&`
        }

        if (cliente) {
            url += `cliente=${cliente}&`
        }

        const dados = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        if (!dados.ok) throw new Error('Erro na rede')
        
        return await dados.json()

    } catch (error) {
        console.error('Erro:', error)
        return []
    }
}