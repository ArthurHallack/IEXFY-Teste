export const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} em ${req.url}`)
    //vou usar pra ver os logs que ocorrerem no servidor com um pouco mais de detalhes mesmo sem ser um erro, apenas pra fins de debugging
    next()
  }