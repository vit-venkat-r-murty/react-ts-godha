import { createContext, useState, type ReactNode } from "react"

type AuthUser = {
    name: string,
    email: string
}

type TAuthContext = {
    // user: AuthUser | null,
    // setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
    user: AuthUser,
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>
}

// export const AuthContext = createContext<TAuthContext | null>(null)
export const AuthContext = createContext({} as TAuthContext)

export default function AuthContextProvider({children}: {children: ReactNode}) {

    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState({} as AuthUser)


  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}
