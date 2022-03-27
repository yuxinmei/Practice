import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'

export function getUserById(id: number) {
  return axios.get('/get').then((res) => {
    console.log(res.data)
  })
}
