export async function Editar(id, Newdata) {
    try {
        const response = await fetch(`http://localhost:3001/api/oportunidades/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Newdata)
        })

        if (!response.ok) throw new Error('Erro ao atualizar parcialmente')
        
        return await response.json()

    } catch (error) {
        console.error('Erro no PATCH:', error)
        throw error
    }
}