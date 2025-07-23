type Props = {
   handleGenericChange: () => void
}

export default function DynamicTarget({ handleGenericChange }: Props) {
   return <button onClick={handleGenericChange}>Save</button>
}
