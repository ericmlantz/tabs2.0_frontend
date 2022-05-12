import './style/App.css';
import Interests from './pages/Interests'
import Pages from './pages/Pages'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  
  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  //PAGES ITEMS
  const [pages, setPages] = useState([])

  const createPage = async () => {
    const res = await CreatePage();
    setPages(res)
  }
  
  return (
    <div className="App">
      <h1>Tabs 2.0</h1>
      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <Routes>
        <Route path='/' element={<Home setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>
        <Route path='interests' element={<Interests user={user} authenticated={authenticated} pages={pages}/>} />
        <Route path='profile' element={<Profile user={user} setUser={setUser} />} />
        <Route path='pages' element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App
