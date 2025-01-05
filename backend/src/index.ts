
import express from 'express'
import cors from 'cors'
import { applyTrpcToExpressApp } from './lib/trpc'
import { trpcRouter } from './router'

const expressApp = express()
expressApp.use(cors())
expressApp.get('/ping', (req, res) => {
  res.send('Pong!')
})

applyTrpcToExpressApp(expressApp, trpcRouter)



expressApp.listen(3000, () => {
  console.info('Express server listening on port ' + expressApp.name)
})
