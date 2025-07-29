import { useState } from 'react'

type User = {
   username: string
   email: string
   token: string
}

export default function UserState() {
   const [user, setUser] = useState<User | null>(null)

   const handleLogIn = () => {
      setUser({
         username: 'John',
         email: 'john@example.com',
         token: '1231242424abdfasbdbasdfbhb',
      })
   }
   const handleLogOut = () => {
      setUser(null)
   }

   return (
      <div>
         <h2>
            {user
               ? `User is ${user.username} - ${user.email}`
               : 'Please login!'}
         </h2>
         <button onClick={handleLogIn}>Login</button>
         <button onClick={handleLogOut}>Logout</button>
      </div>
   )
}
