import { trpc } from '../../lib/trpc'
import { Link } from 'react-router-dom'
import { getViewIdeaRoute, } from '../../lib/routes.ts'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery()
  if (isLoading) {
    return <span>Loading ...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <div>
      <h1>All ideas</h1>
      <div>
        {data.map((idea) => {
          return (
            <div key={idea.nick}>
              <h2><Link to={getViewIdeaRoute({ideaNick: idea.nick})}>{idea.name}</Link></h2>
              <p> {idea.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
