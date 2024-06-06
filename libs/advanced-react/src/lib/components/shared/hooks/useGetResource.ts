import { useEffect, useState } from 'react'
import { axios } from '@study-nx/axios'
import { Response } from '../../../types'

export interface UseGetProps {
    url: string
}

interface User {
    firstName: string,
    gender: string,
    email: string,
    birthDate: string,
    address: { address: string, city: string, state: string, stateCode: string, postalCode: string }, 
    age: number,
    bank: { cardExpire: string, cardNumber: string,  cardType: string, currency: string }
}

const useGetResource = ({ url }: UseGetProps): Response<User>|null => {
    const [resourceData, setResourceData] = useState(null)

    useEffect(() => {(async() => {
        const resp = await axios().get(url)
        setResourceData(resp?.data || {})
    })()}, [url])

    return resourceData
}

export default useGetResource