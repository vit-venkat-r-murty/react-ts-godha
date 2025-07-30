import { useContext } from "react"
import AuthContextProvider, { AuthContext } from "./AuthContext"



export default function AuthUser() {

    const authcontext = useContext(AuthContext)


    const handlelogin = () => {
        // if (authcontext) {
        //     authcontext.setUser({
        //         name: "john",
        //         email: "example.com"
        //     })
        // }
         authcontext.setUser({
                name: "john",
                email: "example.com"
            })
    }

    const handlelogout = () => {
        // if (authcontext) {
        //     authcontext.setUser({
        //         name: "",
        //         email: ""
        //     })
        // }

        authcontext.setUser({
                name: "",
                email: ""
            })
    }

    return (
       
            <div>
                <h1>Auth User</h1>
                <button onClick={handlelogin}>Login</button>
                <button onClick={handlelogout}>Logout</button>
                <div>
                    {authcontext?.user && authcontext.user.name ? (
                        <p>Welcome, {authcontext.user.name}</p>
                    ) : (
                        <p>Please log in.</p>
                    )}
                </div>
            </div>

        
  )
}
