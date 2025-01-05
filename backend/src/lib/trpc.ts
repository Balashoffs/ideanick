import { initTRPC } from '@trpc/server'
import { type  Express } from 'express'
import { type TrpcRouter } from '../router'
import * as trcpExpress from '@trpc/server/adapters/express'

export const trpc = initTRPC.create()

export const applyTrpcToExpressApp = (expressApp: Express, trpcRouter : TrpcRouter) => {
  expressApp.use(
    '/trpc',
    trcpExpress.createExpressMiddleware({
      router: trpcRouter,
    }),
  )
}