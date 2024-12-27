import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const ideas = _.times(100, (i) => ({
  nick: `cool-idea-nick-${i}`,
  name: `Idea ${i}`,
  description: `Description of idea ${i}... `,
  text: _.times(100, (j) => {
    return `<p>Text paragraph ${j} of idea ${i}....<\p>`
  }).join(''),
}))


const trpc = initTRPC.create()


export const trpcRoutes = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description']))
  }),
  getIdea: trpc.procedure.input(z.object({ ideaNick: z.string() })).query(({ input }) => {
    const idea = ideas.find((idea) => idea.nick === input.ideaNick)
    return {idea: idea || null}
  }),
})

export type TrpcRoutes = typeof trpcRoutes
