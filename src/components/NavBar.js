import { NavLink } from 'react-router-dom'

const NavBar = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav id="navbar">
        <NavLink id="tabs" className='tabs' to={`/tabs`}>
          Tabs 2.0
        </NavLink>
        <div id="mySidenav" className="sidenav">
        <NavLink id="interest" className="link" to={`/interests`}>
          Interest <i className="bi bi-journal-bookmark-fill"></i>
        </NavLink>
        <NavLink id="profile" className="link" to={`/profile`}>
          Profile <i className="bi bi-person-plus-fill"></i>
        </NavLink>
        <NavLink id="signout" className="link outred" onClick={handleLogOut} to="/">
          Sign Out <i className="bi bi-box-arrow-left"></i>
        </NavLink>
      </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav id="navbar">
      <NavLink id="tabs" className='tabs' to={`/tabs`}>
          Tabs 2.0
        </NavLink>
        <div id="mySidenav" className="sidenav">
        <NavLink id="interest" className="link" to={'/register'}>
          Register  <i className="bi bi-person-plus-fill"></i>
        </NavLink>
        <NavLink id="profile" className="link" to={'/signin'}>
          Sign In <i className="bi bi-door-open-fill"></i>
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
