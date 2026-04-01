const categorias = [
    { id: 1, nome: 'Software', filhos: [
      { id: 2, nome: 'CRM', filhos: [] },
      { id: 3, nome: 'ERP', filhos: [
        { id: 4, nome: 'Financeiro', filhos: [] },
        { id: 5, nome: 'Estoque', filhos: [] },
      ]},
    ]},
    { id: 6, nome: 'Serviços', filhos: [
      { id: 7, nome: 'Consultoria', filhos: [] },
    ]},
  ]
  
  function listarTodos(lista) {
    let resultado = []
  
    lista.forEach(cat => {
      resultado.push({ id: cat.id, nome: cat.nome })
  
      if (cat.filhos && cat.filhos.length > 0) {
        resultado = resultado.concat(listarTodos(cat.filhos))
      }
    })
  
    return resultado
  }
  
  console.log(listarTodos(categorias))