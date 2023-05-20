import axios from 'axios'

/**
 * Function to get token
 * @param {Object} payload
 * @return AxiosPromise
 */
export const getLogin = (payload) => {
  return axios.post(`${process.env.API_URL}/login`, payload)
}

/**
 * Function to set token for authentication in localStorage
 * @param {String} token
 * @return void
 */
export const setLogin = (token) => {
  localStorage.setItem('token', token)
}

/**
 * Function to remove token in localStorage
 * @return void
 */
export const logOut = () => {
  window.$cookies.remove('session')
  // localStorage.removeItem('user')
}

/**
 * Function to know if the user is authenticated
 * @return Boolean
 */
export const isAuthenticated = () => {
  //const token = localStorage.getItem('token')
  const token = window.$cookies.get('session')
  return (token)
}