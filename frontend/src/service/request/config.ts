let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://localhost:8080/prod'
} else if (process.env.NODE_ENV === 'development') {
  baseURL = '/api'
} else {
  baseURL = 'http://localhost:8080/test'
}
