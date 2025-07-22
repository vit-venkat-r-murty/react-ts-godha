import type { ReactNode } from 'react'

type HeadingProps = {
   children: ReactNode
}

export default function Heading({ children }: HeadingProps) {
   return <h2>{children}</h2>
}
