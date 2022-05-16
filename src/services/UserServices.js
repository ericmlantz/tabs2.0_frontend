import Client from './api'

export const GetAllUsers = async () => {
  try {
    const res = await Client.get(`http://localhost:3001/users/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }
  

export const GetUser = async (pk) => {
try {
  const res = await Client.get(`http://localhost:3001/users/${pk}`)
  return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (id) => {
  const res = await Client.delete(`users/delete/${id}`)
}

export const UpdateUser = async (pk, data) => {
  try {
    const res = await Client.put(`/users/update/${pk}`, data)
  } catch (error) {
    throw error
  }
}