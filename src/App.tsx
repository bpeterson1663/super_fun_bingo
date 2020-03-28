import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AdminContainer from './components/AdminContainer/AdminContainer'
import CardList from './components/CardList/CardList'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import { auth } from './firebase'

const App: React.FunctionComponent = (): JSX.Element => {
  const [authId, setAuthId] = useState('test')
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setAuthId(user.uid) : setAuthId('')
    })
  }, [])
  return (
    <div>
      <h1>Virtual Bingo</h1>
      <BrowserRouter>
        <Navigation />
        <Route path="/admin" exact component={authId ? AdminContainer : Login} />
        <Route path="/cards" exact component={authId ? CardList : Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </div>
  )
}

export default App
