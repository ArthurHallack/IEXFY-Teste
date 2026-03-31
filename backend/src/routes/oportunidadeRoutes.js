import { Router } from 'express';
import { oportunidadesController } from '../controller/oportunidadesController.js';

const router = Router()

router.get('/oportunidades', oportunidadesController.listar)
router.get('/oportunidades/:id', oportunidadesController.buscarPorId)
router.post('/oportunidades', oportunidadesController.criar)
router.patch('/oportunidades/:id', oportunidadesController.atualizar)
router.delete('/oportunidades/:id', oportunidadesController.deletar)
router.get('/dashboard/resumo', oportunidadesController.dashboard)

export default router