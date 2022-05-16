import './style/App.css';
import Interests from './pages/Interests'
import InterestCard from './components/InterestCard';
import Pages from './pages/Pages'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import CreatePageForm from './components/CreatePageForm';
import CreateSearchForm from './components/CreateSearchForm';
import CreateInterestForm from './components/CreateInterestForm';
import Register from './pages/Register'
import Tabs from './pages/Tabs';

import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'

const App = () => {
  const [pages, setPages] = useState([])
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({
    id: 1,
    name: '',
    email: '',
    passwordDigest: '',
    
  })
  
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
  
  const username = localStorage.getItem('username')
  const theUserId = parseInt(localStorage.getItem('theUserId'))
  const email = localStorage.getItem('email')

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">

      <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
        theUserId={theUserId}
      />

      <Routes>
        
        <Route path='/' element={<Tabs setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>

        <Route path='/signin' element={<Home setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>
        
        <Route path='/register' element={<Register setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>

        <Route path='/interests' element={<Interests theUserId={theUserId}/>} />
        
        <Route path='/users/:id' element={<Profile user={user} username={username} email={email} theUserId={theUserId} setUser={setUser} handleLogOut={handleLogOut}/>} />
        
        <Route path='/pages' element={<Pages />} />
        
        <Route path='/createinterest' element={<CreateInterestForm theUserId={theUserId}/>} />
        <Route path='/createpage/:id' element={<CreatePageForm />} />
        <Route path='/createsearch/:id' element={<CreateSearchForm />} />
        

        {/* <Route path='/pages/update/:id' element={<PageCard pages={pages} theUserId={theUserId}/>}/> */}
                
        <Route path='/interests/:id' element={<InterestCard pages={pages} theUserId={theUserId}/>}/>
      </Routes>
    </div>
  );
}

export default App
