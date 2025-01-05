import { trpc } from '../lib/trpc'
import { getIdeasTrpcRoute } from './getIdeas'
import { getIdeaTrpcRoute } from './getIdea'

export const trpcRouter =  trpc.router({
  getIdeas: getIdeasTrpcRoute,
  getIdea: getIdeaTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter