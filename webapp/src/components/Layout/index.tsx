import {Link, Outlet} from 'react-router-dom'
import { getAllIdeasRoute } from '../../lib/routes.ts'

export const Layout = () => {
  return (
    <div>
      <p>
        <b>Idea Nick</b>
      </p>
      <ul>
        <li>
          <Link to={getAllIdeasRoute()}> All Ideas</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}