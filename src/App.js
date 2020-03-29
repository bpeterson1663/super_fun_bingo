import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AdminContainer from './components/AdminContainer/AdminContainer'
import CardList from './components/CardList/CardList'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import AuthContext from './context/Authentication.context'
import { auth } from './firebase'

const App = () => {
  const [authId, setAuthId] = useState('test')
  const login = (status) => {
    setAuthId(status)
  }
  const authContext = {
    userId: authId,
    login: login,
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setAuthId(user.uid) : setAuthId('')
    })
  }, [])
  return (
    <div>
      <h1>Virtual Bingo</h1>
      <BrowserRouter>
        <AuthContext.Provider value={authContext}>
          <Navigation />

          <Route path="/admin" exact component={authId ? AdminContainer : Login} />
          <Route path="/cards" exact component={authId ? CardList : Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
