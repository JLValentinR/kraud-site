import axios from 'axios'

axios.interceptors.request.use((config) => {
  let url = config.url

  if (url.indexOf('api/cards') > 0 || url.indexOf('api/card/pay') > 0  || url.indexOf('users/me') > 0 )  {
    const token = window.$cookies.get('session')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
  return response
}, (err) => {
  console.log(err)
  if (err.response.status === 401) {
    window.$cookies.remove('session')
    location.href = '/'
  }
  return Promise.reject(err)
})
