import type { MouseEvent } from 'react'

type ButtonProps = {
   handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function ButtonEvent({ handleClick }: ButtonProps) {
   return (
      <button onClick={(event) => handleClick(event, 1)}>Button Event</button>
   )
}

// ClipboardEvent
// KeyboardEvent
// FormEvent
// ChangeEvent
// MouseEvent
// TouchEvent

// CompositionEvent
// FocusEvent
// WheelEvent
// UIEvent
// AnimateEvent
// PointerEvent
// TranitionEvent
