// Positions

// Horizontal = "left" | "center" | "right"
// Vertical = "top" | "center" | "bottom"

type HorizontalPosition = 'left' | 'center' | 'right'

type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position:
        | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
        | 'center'
}

export default function Toast({ position }: ToastProps) {
    return <div>Toast - {position}</div>
}
