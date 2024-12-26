import * as trcpExpress from '@trpc/server/adapters/express'
import { trpcRoutes } from './trpc'
import express from 'express'

const expressApp = express()
expressApp.get('/ping', (req, res) => {
  res.send('Pong!')
})

expressApp.use(
  '/trpc',
  trcpExpress.createExpressMiddleware({
    router: trpcRoutes,
  })
)

expressApp.listen(3000, () => {
  console.info('Express server listening on port ' + expressApp.name)
})
