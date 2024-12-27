import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc.tsx'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage'
import { getViewIdeaRoute, getAllIdeasRoute, viewIdeaRouteParams } from './lib/routes'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </TrpcProvider>
  )
}
