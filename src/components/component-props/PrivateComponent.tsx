import type { ComponentType } from 'react'
import Login from './Login'
import type { ProfileProps } from './Profile'

type PrivateComponentProps = {
    isLoggedIn: boolean
    component: ComponentType<ProfileProps>
}

export default function PrivateComponent({
    isLoggedIn,
    component: Component,
}: PrivateComponentProps) {
    return <div>{isLoggedIn ? <Component name='Typescript'/> : <Login />}</div>
}
