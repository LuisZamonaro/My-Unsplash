import { useState, useEffect } from "react"
import { useAutentication } from "../../hooks/useAutentication"
import * as S from './styles'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAutentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <S.Container>
      <h1>Login</h1>
      <p>Log in to be able to use the system</p>
      <S.FormContainer onSubmit={handleSubmit}>
        <label>
          <div className="typeInput">E-mail:</div>
          <input className="inputBox" type="email" name="email" required placeholder="User e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <div className="typeInput">Password:</div>
          <input className="inputBox" type="password" name="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <S.AreaBtn>
          {!loading && <button className="btnEnter">ENTER</button>}
          {loading && <button className="btnEnter" disabled>Loading...</button>}
        </S.AreaBtn>
        {error && <p>{error}</p>}
      </S.FormContainer>
      <div className="noAccount">
        <Link to="/register"><p>Don&apos;t have an account yet? Click here and register</p></Link>
      </div>
    </S.Container>
  )
}

export default Login