import { useState } from 'react'

type User = {
   username: string
   email: string
   token: string
}

export default function UserState() {
   const [user, setUser] = useState<User>({} as User)

   const handleLogIn = () => {
      setUser({
         username: 'John',
         email: 'john@example.com',
         token: '1231242424abdfasbdbasdfbhb',
      })
   }

   return (
      <div>
         <h2>
            {user.username} - {user.email}
         </h2>
         <button onClick={handleLogIn}>Login</button>
      </div>
   )
}
