import { useEffect, useRef } from 'react'

export default function Dom() {
   const inputRef = useRef<HTMLInputElement>(null!)

   useEffect(() => {
      inputRef.current.focus()
   }, [])

   return (
      <div>
         <h2>Form</h2>

         <input
            type='text'
            name='username'
            placeholder='Username'
            ref={inputRef}
         />
      </div>
   )
}
