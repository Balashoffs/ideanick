import { trpc } from '../../lib/trpc'
import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from '../../lib/routes.ts'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery()
  if (isLoading) {
    return <span>Loading ...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <Segment
              size={2}
              title={<Link className={css.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                {idea.name}
              </Link>}
              description={idea.description}
            >

            </Segment>
          </div>
        ))}
      </div>
    </Segment>
  )
}


