import { useEffect, useState } from 'react'
import { axios } from '@study-nx/axios'

export interface UseGetResource {
    url: string
}

const useGetResource = ({ url }: UseGetResource) => {
    const [resourceData, setResourceData] = useState()

    useEffect(() => {(async() => {
        const resp = await axios().get(url)
        setResourceData(resp?.data || {})
    })()}, [url])

    return resourceData
}

export default useGetResource