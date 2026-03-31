import express from 'express';
import cors from 'cors';
import { requestLogger } from './middleware/logger.js';
import oportunidadeRoutes from './routes/oportunidadeRoutes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(requestLogger)

// Rotas
app.use('/api', oportunidadeRoutes)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`)
})