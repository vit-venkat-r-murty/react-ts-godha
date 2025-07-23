import type { PersonProps } from '../../types/Person.types'

type Props = {
   name: PersonProps
}

export default function Person({ name }: Props) {
   return <div>Person name is {name.name.firstName}</div>
}
