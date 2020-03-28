import * as React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Link data-testid="nav_cards-created" to="/admin">
        Cards Created By You
      </Link>
      <Link data-testid="nav_cards-playing" to="/cards">
        Cards You are Playing
      </Link>
    </div>
  )
}

export default Navigation
