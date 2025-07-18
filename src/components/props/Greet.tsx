type PropType = {
   username: string
   id?: number
}

export default function Greet({ username, id }: PropType) {
   return (
      <div>
         Welcome {username} {id ? `and your id is ${id} ` : ''}
      </div>
   )
}
