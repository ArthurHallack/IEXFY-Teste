import { oportunidades, setOportunidades } from "../data/db.js";

export const oportunidadesController = {
    listar: (req,res) => {
        const {status, cliente} = req.query
        let resultado = [...oportunidades]

        if (status) {
            resultado = resultado.filter(o => o.status === status)
        }

        if (cliente) {
            resultado = resultado.filter(o => o.cliente.toLowerCase().includes(cliente.toLowerCase()))
        }

        res.json(resultado)
    },

    buscarPorId: (req, res) => {
        const op = oportunidades.find(o => o.id === parseInt(req.params.id))

        if (!op) {

            return res.status(404).json({ erro: "Oportunidade não encontrada" })
        } 

        res.json(op)
      },

    criar: (req, res) => {
        const { cliente, valor, status } = req.body

        if (!cliente || !valor || !status) {
          return res.status(400).json({ erro: "Campos obrigatórios: cliente, valor, status" });
        }
    
        const nova = {
          id: oportunidades.length ? oportunidades[oportunidades.length - 1].id + 1 : 1,
          cliente,
          valor: Number(valor),
          status,
          data: new Date().toISOString().split('T')[0]
        }
    
        oportunidades.push(nova)

        res.status(201).json(nova)
      },

    atualizar: (req, res) => {
        const index = oportunidades.findIndex(o => o.id === parseInt(req.params.id))

        if (index === -1) {
            return res.status(404).json({ erro: "Não encontrado" })
        }
    
        const { status, valor } = req.body

        if (status) {
            oportunidades[index].status = status
        }

        if (valor) {
            oportunidades[index].valor = Number(valor)
        } 
    
        res.json(oportunidades[index])
      },
    
    deletar: (req, res) => {
        const novaLista = oportunidades.filter(o => o.id !== parseInt(req.params.id))
        setOportunidades(novaLista)
        res.status(204).send()
      },

    dashboard: (req, res) => {
        const resumo = oportunidades.reduce((acc, op) => {

          acc.totalValorAgregado += op.valor
          acc.totaisPorStatus[op.status] = (acc.totaisPorStatus[op.status] || 0) + 1
          return acc

        }, { totalValorAgregado: 0, totaisPorStatus: {} })
    
        res.json(resumo)
      }
}