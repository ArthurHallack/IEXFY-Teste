export async function Delete(id) {
    let urlApi =`http://localhost:3001/api/oportunidades/${id}`

    try {
        const dados = await fetch(urlApi, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })

        if (dados.ok){
            alert("Realizado com sucesso!")
            return
        } else {
            alert("falha ao deletar")
            return
        }

    } catch (error) {
        console.error('Erro:', error);
    }
}