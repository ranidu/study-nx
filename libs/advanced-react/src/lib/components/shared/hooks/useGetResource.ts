import { useEffect, useState } from 'react'
import { axios } from '@study-nx/axios'

export interface UseGetProps {
    url: string
}

const useGetResource = ({ url }: UseGetProps) => {
    const [resourceData, setResourceData] = useState()

    useEffect(() => {(async() => {
        const resp = await axios().get(url)
        setResourceData(resp?.data || {})
    })()}, [url])

    return resourceData
}

export default useGetResource