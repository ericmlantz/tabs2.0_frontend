import { NavLink } from 'react-router-dom'
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const NavBar = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions

  const GlobalStyle = createGlobalStyle`
  .link {
    font-size: 8px;
  }
`;

const StyledNav = styled.nav`
    /* Your styles here */
`;

function Nav({children}) {
  return (
    <StyledNav>
      <GlobalStyle />
      {children}
    </StyledNav>
  );
}
  if (user) {
    authenticatedOptions = (
      <Nav id="navbar">
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
        
        
        
      </Nav>
    )
  }

  const publicOptions = (
    <nav id="navbar">
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
