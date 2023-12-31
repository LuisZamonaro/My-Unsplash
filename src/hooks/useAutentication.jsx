import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import {useState, useEffect} from 'react'

export const useAutentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    const [canceled, setCanceled] = useState(false)

    const auth = getAuth()

    function checkIfIsCanceled() {
        if(canceled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIfIsCanceled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")) {
                systemErrorMessage = "The password must contain at least 6 characters."
            } else if(error.message.includes("email-already")) {
                systemErrorMessage = "E-mail already registered."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    // logout
    const logout = () => {
        checkIfIsCanceled()

        signOut(auth)
    }

    // login
    const login = async(data) => {
        checkIfIsCanceled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            let systemErrorMessage

            if(error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado."
            } else if(error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCanceled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}