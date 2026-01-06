
import {  useUser } from '@clerk/clerk-react'
import { Routes , Route, Navigate } from 'react-router'
import Home from './pages/Home'

import Problems from './pages/Problems'
import { Toaster } from 'react-hot-toast'

function App() {

  const {isSignedIn} = useUser()
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/problems"
          element={isSignedIn ? <Problems /> : <Navigate to={"/"} />}
        />
      </Routes>

      <Toaster toastOptions={{duration: 3000}}  />
    </>
  );
}

export default App