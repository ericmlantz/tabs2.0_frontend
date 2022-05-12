import Client from './api'

export const GetUser = async (pk) => {
try {
  const res = await Client.get(`http://localhost:3001/users/${pk}`)
  return res.data
  } catch (error) {
    throw error
  }
}

