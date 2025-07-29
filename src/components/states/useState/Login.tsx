import { useState } from 'react'

export default function Login() {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   const handleLogIn = () => {
      setIsLoggedIn(true)
   }
   const handleLogOut = () => {
      setIsLoggedIn(false)
   }

   return (
      <div>
         <h2>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
         <button onClick={handleLogIn}>Login</button>
         <button onClick={handleLogOut}>Logout</button>
      </div>
   )
}
