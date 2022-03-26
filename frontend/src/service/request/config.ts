let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://localhost:8080/prod'
} else if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080/dev'
} else {
  baseURL = 'http://localhost:8080/test'
}
