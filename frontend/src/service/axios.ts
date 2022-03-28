import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'

axios.get('/get').then((res) => {
  // console.log(res.data)
})

axios
  .post('/post', {
    data: {
      name: 'mae',
      age: 18
    }
  })
  .then((res) => {
    // console.log(res.data)
  })

axios.delete('/delete', {})

axios.put('/put', {})

axios
  .all([
    axios.get('/get', { params: { name: 'mae', age: 18 } }),
    axios.post('/post', { data: { name: 'mae', age: 18 } })
  ])
  .then((res) => {
    // console.log(res)
  })
