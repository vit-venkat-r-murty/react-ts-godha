import type { ComponentProps, ElementType, ReactNode } from 'react'

// type Props = {
//     size: 'text-sm' | 'text-base' | 'text-xs'
//     children: ReactNode
//     as?: ElementType
// }

type Props<E extends ElementType> = {
    size: 'text-sm' | 'text-base' | 'text-xs'
    children: ReactNode
    as?: E
}

type TextProps<E extends ElementType> = Props<E> &
    Omit<ComponentProps<E>, keyof Props<E>>

export default function Text<E extends ElementType = 'div'>({
    size,
    children,
    as,
    ...rest
}: TextProps<E>) {
    const Component = as || 'div'

    return (
        <Component
            className={`${size}`}
            {...rest}>
            {children}
        </Component>
    )
}
