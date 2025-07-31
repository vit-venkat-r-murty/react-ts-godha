type ListProps<T> = {
    items: T[]
}

export default function Lists<T extends { id: number }>({
    items,
}: ListProps<T>) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{JSON.stringify(item)}</li>
            ))}
        </ul>
    )
}
