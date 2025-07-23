import type { ChangeEvent } from 'react'

type Props = {
   value: string
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputEvent({ value, handleChange }: Props) {
   return (
      <input
         value={value}
         onChange={handleChange}
      />
   )
}
