import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/authContext'
import { onAuthStateChanged } from 'firebase/auth' // mapeia se a autenticação do usuário foi feita com sucesso
import { useState, useEffect } from 'react'
import { useAutentication } from './hooks/useAutentication'
import { OpenProvider } from './context/addPhotoContext'
import { GlobalStyles } from './styles/GlobalStyles'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAutentication()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  const loadingUser = user === undefined

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <OpenProvider>
        <AuthProvider value={{ user }}>
          <GlobalStyles/>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path='/search' element={user ? <Search /> : <Navigate to="/login" />} />
              <Route path='/posts/:id' element={user ? <Post/> : <Navigate to="/login" />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </OpenProvider>
    </div>
  )
}

export default App
