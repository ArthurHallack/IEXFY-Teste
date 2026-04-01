const vendas = [
    { vendedor: 'Ana', valor: 1200, status: 'aprovado' },
    { vendedor: 'Bruno', valor: 850, status: 'cancelado' },
    { vendedor: 'Ana', valor: 3400, status: 'aprovado' },
    { vendedor: 'Carlos', valor: 2100, status: 'aprovado' },
    { vendedor: 'Bruno', valor: 1700, status: 'aprovado' },
    { vendedor: 'Ana', valor: 600, status: 'cancelado' },
  ];
  
  function analisarVendas(transacoes) {
    
    const aprovadas = transacoes.filter(v => v.status === 'aprovado')
  
    
    const totaisPorVendedor = {}
    let totalGeral = 0
  
    aprovadas.forEach(v => {
      totalGeral += v.valor
      totaisPorVendedor[v.vendedor] = (totaisPorVendedor[v.vendedor] || 0) + v.valor
    })
  
    
    const ranking = Object.keys(totaisPorVendedor)
      .map(nome => ({ vendedor: nome, total: totaisPorVendedor[nome] }))
      .sort((a, b) => b.total - a.total)
  
    return {
      totalGeral: totalGeral,
      ticketMedio: totalGeral / aprovadas.length,
      topVendedor: ranking[0].vendedor,
      ranking: ranking
    }
  }
  
  console.log(analisarVendas(vendas))