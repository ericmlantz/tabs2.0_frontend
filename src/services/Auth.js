import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post(`/users/register`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LoginUser = async (data) => {
  try {
    const res = await Client.post(`/users/login`, data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('username', res.data.user.name)
    localStorage.setItem('theUserId', res.data.user.id)
    localStorage.setItem('email', res.data.user.email)
    return res.data
  } catch (error) {
  throw error
}
}

export const CheckSession = async () => {
  try {
    // Checks if the current token, if it exists, is valid
    const res = await Client.get(`/users/session`)
    return res.data
  } catch (error) {
    throw error
  }
}

