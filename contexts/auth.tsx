import { createContext, useContext, useEffect, useState } from "react"
import jwt from 'jsonwebtoken'


interface IAuthProvider {
  token: string,
  auth: boolean
}

// se crea el contexto y su contenido
const SessionContext = createContext<IAuthProvider>({ auth: false, token: '' })

// wrapper de autenticacion
export function AuthProvider({ children }: any) {

  // carga util de la autenticacion para el cliente
  const [authPayload, setAuthPayload] = useState<IAuthProvider>({
    token: '',
    auth: false
  })

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      setAuthPayload({
        token: '',
        auth: false
      })
      return
    }

    // se verifica el token
    setAuthPayload({
      token: token,
      auth: true
    })

    return

  }, [])

  return (
    <SessionContext.Provider value={authPayload}>
      {children}
    </SessionContext.Provider>
  )

}

// hook de autenticacion
export const useAuthData = () => {
  return useContext(SessionContext)
}