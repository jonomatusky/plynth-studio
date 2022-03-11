import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserContext } from 'contexts/user-context'
import { useAuth } from 'hooks/use-auth'
import firebase from 'config/firebase'
// import posthog from 'posthog-js'
import ReactGA from 'react-ga'

import PrivateRoute from 'routes/PrivateRoute'
import Login from 'pages/Login/Login'
import SignUp from 'pages/SignUp/SignUp'
import Recover from 'pages/Recover/Recover'
import Admin from 'pages/Admin/Admin'
import Account from 'pages/Account/Account'

import AlertBar from 'components/AlertBar'
import PublicNav from 'layouts/PublicNav/PublicNav'
import AdminNav from 'layouts/AdminNav/AdminNav'

// const { REACT_APP_POSTHOG_KEY } = process.env

const App = () => {
  const { user, logout, initializing } = useAuth()

  // posthog.init(REACT_APP_POSTHOG_KEY, {
  //   api_host: 'https://app.posthog.com',
  // })

  ReactGA.initialize('UA-136166229-3')

  firebase.analytics()

  return (
    <UserContext.Provider
      value={{ user: user, logout: logout, initializing: initializing }}
    >
      <Router>
        <AlertBar />
        <Routes>
          <Route path="/" element={<PrivateRoute component={AdminNav} />}>
            <Route path="/" element={<Admin />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/" element={<PublicNav right={<></>} hideFooter />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/lively-signup" element={<LivelySignUp />} /> */}
            <Route path="/recover" element={<Recover />} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
