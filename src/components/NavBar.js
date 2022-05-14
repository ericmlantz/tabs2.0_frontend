import { NavLink } from 'react-router-dom'

const NavBar = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav id="navbar">
        <div id="mySidenav" className="sidenav">
        <NavLink id="about" className="link" to={`/profile`}>
          Profile
        </NavLink>
        <NavLink id="blog" className="link" to={`/interests`}>
          Interests
        </NavLink>
        <NavLink className="signout link" id="projects" onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav id="navbar">
        <div id="mySidenav" className="sidenav">
        <NavLink id="about" className="link" to={'/register'}>
          Register
        </NavLink>
        <NavLink id="blog" className="link" to={'/'}>
          Sign In
        </NavLink>
        </div>
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

export default NavBar
