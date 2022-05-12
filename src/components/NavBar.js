import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="navBar">
        <NavLink className="nav-link" to={`/profile`}>
          Profile
        </NavLink>
        <NavLink className="nav-link" to={`/interests`}>
          Interests
        </NavLink>
        <NavLink className="signout nav-link" onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>

      </nav>
    )
  }

  const publicOptions = (
    <nav className="navBar">
    </nav>
  )

  return (
    <header>
      <NavLink to="/">
        <div className="logo-wrapper" alt="logo"></div>
      </NavLink>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
