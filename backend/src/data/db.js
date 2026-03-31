export let oportunidades = [
    { id: 1, cliente: "Empresa Alfa", valor: 1500, status: "aberta", data: "2026-03-31" },
    { id: 2, cliente: "Tech Solutions", valor: 3000, status: "ganha", data: "2026-03-30" }
  ]
  
  export const setOportunidades = (novaLista) => {
    oportunidades = novaLista;
  }