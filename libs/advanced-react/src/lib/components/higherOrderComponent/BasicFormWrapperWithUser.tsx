import { FC } from 'react'
import { User, useGetCurrentUser } from '../hooks'

const BasicFormWrapper = (Component: FC<User>) => {
    const user = useGetCurrentUser()
    return (props: User) => {
        return <Component {...user} />
    }
}

export default BasicFormWrapper