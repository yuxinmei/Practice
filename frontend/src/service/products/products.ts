import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'http://localhost:8080/api/',
//   timeout: 1000,
//   headers: { 'X-Custom-Header': 'foobar' }
// })

export function getProducts() {
  alert(11111)
  return axios.get('https://www.runoob.com/try/ajax/json_demo.json').then((res) => {
    alert(res.data)
  })
}

export function getProduct(id: number) {
  return axios.get('/get/' + id).then((res) => {
    console.log(res.data)
  })
}

export function newProduct(newData: any) {
  return axios
    .post('/api/add', {
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
