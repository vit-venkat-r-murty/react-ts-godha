import type { Name } from '../../types/Person.types'

type Props = {
   names: Name[]
}

export default function PersonList({ names }: Props) {
   return (
      <div>
         {names.map((name) => (
            <div key={name.firstName}>
               Person firstname is {name.firstName} and lastname is{' '}
               {name.lastName}
            </div>
         ))}
      </div>
   )
}
