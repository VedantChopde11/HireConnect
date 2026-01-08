
import {  useUser } from '@clerk/clerk-react'
import { Routes , Route, Navigate } from 'react-router'
import Home from './pages/Home'

import Problems from './pages/Problems'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard'
import Problem from './pages/Problem'

function App() {

  const {isSignedIn , isLoaded} = useUser()

  // this will get rid of the flickering effect
  if(!isLoaded) return null
  
  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <Home /> : <Navigate to={"/dashboard"} />} />
        <Route path='/dashboard' element= {isSignedIn ? <Dashboard /> : <Navigate to={"/"}  />} />

        <Route
          path="/problems"
          element={isSignedIn ? <Problems /> : <Navigate to={"/"} />}
        />

        <Route
          path="/problem/:id"
          element={isSignedIn ? <Problem /> : <Navigate to={"/"} />}
        />
      </Routes>

      <Toaster toastOptions={{duration: 3000}}  />
    </>
  );
}

export default App