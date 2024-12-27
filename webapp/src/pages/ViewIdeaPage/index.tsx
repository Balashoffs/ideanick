import { useParams } from 'react-router-dom'
import { ViewIdeaRouteParams } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc.tsx'
// import { type ViewIdeaRouteParams } from '../../lib/routes'

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
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div
        dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  )
}
