import { useState, useEffect } from "react"
import { useAutentication } from "../../hooks/useAutentication"
import * as S from './styles'
import { Link } from "react-router-dom"

const Register = () => {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAutentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    console.log(displayName)

    return (
        <S.Container>
            <h1>Sign up to post</h1>
                <S.FormContainer onSubmit={handleSubmit}>
                <label>
                    <div className="typeInput">Name:</div>
                    <input className="inputBox" type="text" name="displayName" required placeholder="Username" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <div className="typeInput">E-mail:</div>
                    <input className="inputBox" type="email" name="email" required placeholder="User e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <div className="typeInput">Password:</div>
                    <input className="inputBox" type="password" name="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <div className="typeInput">Confirm password:</div>
                    <input className="inputBox" type="password" name="confirmPassword" required placeholder="Enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <S.AreaBtn>
                    {!loading && <button className="btnRegister">Register</button>}
                    {loading && <button className="btnRegister" disabled>Loading...</button>}
                </S.AreaBtn>
                {error && <p>{error}</p>}
            </S.FormContainer>
            <div className="alreadyAccount">
                <Link to="/login"><p>Already registered? Click here and go to login page</p></Link>
            </div>
         </S.Container>
    )
}

export default Register