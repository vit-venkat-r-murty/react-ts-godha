// type NumpersProps = {
//     value: number
//     isPostive?: boolean
//     isNegative?: boolean
//     isZero?: boolean
// }

type NumpersProps = {
    value: number
}

type PostiveNumber = NumpersProps & {
    isPostive?: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = NumpersProps & {
    isNegative?: boolean
    isPostive?: never
    isZero?: never
}
type ZeroNumber = NumpersProps & {
    isZero?: boolean
    isNegative?: never
    isPostive?: never
}

type NumbersProps = PostiveNumber | NegativeNumber | ZeroNumber

export default function Numbers({
    value,
    isPostive,
    isNegative,
    isZero,
}: NumbersProps) {
    return (
        <div>
            <h2>Numbers</h2>
            {value}
            {isPostive && 'Postive'}
            {isNegative && 'Negative'}
            {isZero && 'Zero'}
        </div>
    )
}
