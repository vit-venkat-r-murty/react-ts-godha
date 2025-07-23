import type { CSSProperties } from 'react'

type Props = {
   style: CSSProperties
}

export default function Container({ style }: Props) {
   return <div style={style}>Container</div>
}
