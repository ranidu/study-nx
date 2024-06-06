import React, { FC } from 'react'
import { User, useGetCurrentUser } from '../hooks'

const BasicFormWrapper = (Component: React.JSXElementConstructor<User>) => {
    const user = useGetCurrentUser()
    return () => {
        return user && <Component {...user} />
    }
}

export default BasicFormWrapper