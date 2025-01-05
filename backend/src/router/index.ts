import { trpc } from '../lib/trpc'
import { getIdeasTrpcRoute } from './getIdeas'
import { getIdeaTrpcRoute } from './getIdea'
import { createIdeaTrpcRoute } from './createIdea'

export const trpcRouter =  trpc.router({
  getIdeas: getIdeasTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  createIdea: createIdeaTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter