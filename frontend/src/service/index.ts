// Encapsulate axios

import XMRequest from './request/request'
import { API_BASE_URL, TIME_OUT } from './request/config'

const XMRequest = new XMRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT
})

export default XMRequest
