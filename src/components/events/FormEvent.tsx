import type { FormEvent } from 'react'

type Props = {
   handleSubmit: (e: FormEvent<HTMLFormElement>) => void

   handlePaste: (e: ClipboardEvent) => void

   handleKeyboard: (e: KeyboardEvent) => void
}

export default function FormEvent({ handleSubmit }: Props) {
   return (
      <form onSubmit={handleSubmit}>{/* your form logic and element */}</form>
   )
}

//    handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void
