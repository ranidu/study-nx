import axios from 'axios'
import { ENDPOINT } from './constants'

const vendorAxios = () => axios.create({
  baseURL: ENDPOINT
})

export default vendorAxios