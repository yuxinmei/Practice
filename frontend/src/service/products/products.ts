import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'

export function getProducts() {
  return axios.get('/get').then((res) => {
    console.log(res.data)
  })
}

export function getProduct(id: number) {
  return axios.get('/get/' + id).then((res) => {
    console.log(res.data)
  })
}

export function newProduct(newData: any) {
  return axios
    .post('/post', {
      data: newData
    })
    .then((res) => {
      console.log(res.data)
    })
}

export function editProduct(id: number, editData: any) {
  return axios.put('/put/' + id, { data: editData }).then((res) => {
    console.log(res.data)
  })
}

export function deleteProduct(id: number) {
  return axios.delete('/delete/' + id).then((res) => {
    console.log(res.data)
  })
}
