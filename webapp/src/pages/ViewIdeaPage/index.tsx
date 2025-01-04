import { useParams } from 'react-router-dom'
import { ViewIdeaRouteParams } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc.tsx'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams

  const { data, error, isLoading, isError } = trpc.getIdea.useQuery({ ideaNick })
  if (isLoading) {
    return <span>Loading ...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data.idea) {
    return <span>Idea not found</span>
  }

  return (
    <Segment title={data.idea.name} description={data.idea.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  )
}
