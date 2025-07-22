// type ButtonProps = {
//    type: 'submit' | 'reset' | 'button'
//    label: 'Save' | 'Discard' | 'Edit'
//    bgColor: 'bg-green-200' | 'bg-yellow-200' | 'bg-purple-200'
//    textColor: 'text-green-800' | 'text-yellow-800' | 'text-purple-800'
// }

type SubmitButton = {
   type: 'submit'
   label: 'Save'
   bgColor: 'bg-green-200'
   textColor: 'text-green-800'
}

type EditButton = {
   type: 'button'
   label: 'Edit'
   bgColor: 'bg-purple-200'
   textColor: 'text-purple-800'
}

type ButtonProps = SubmitButton | EditButton

export default function Button({
   type,
   label,
   bgColor,
   textColor,
}: ButtonProps) {
   return (
      <button
         type={type}
         className={`${bgColor} ${textColor} px-8 py-3 rounded-xl`}>
         {label}
      </button>
   )
}
