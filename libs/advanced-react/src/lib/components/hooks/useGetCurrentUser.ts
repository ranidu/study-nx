import { useState, useEffect } from 'react'
import { axios } from '@study-nx/axios'

export interface User {
    id: number
    firstName: string,
    lastName: string,
    email: string
}

const useGetCurrentUser = () => {
    const [user, setUser] = useState<User>()

    useEffect(() => {(async() => {
        const resp = await axios().get('/users/1')
        setUser(resp?.data || {})
    })()}, [])

    return user
}

export default useGetCurrentUser