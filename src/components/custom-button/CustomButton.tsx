import React from 'react'

type ButtonProps = {
    variants: 'primary' | 'secondary' | 'outlined'
    // children: ReactNode // avoided
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export default function CustomButton({ children, variants }: ButtonProps) {
    return (
        <button className={`bg-${variants} text-${variants}`}>
            {children}
        </button>
    )
}
