import Client from './api'

export const GetAllUsers = async () => {
  try {
    const res = await Client.get(`/users/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }
  

export const GetUser = async (pk) => {
try {
  const res = await Client.get(`/users/${pk}`)
  return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (id) => {
  const res = await Client.delete(`/users/delete/${id}`)
}

export const UpdateUser = async (pk, data) => {
  try {
    const res = await Client.put(`/users/update/${pk}`, data)
  } catch (error) {
    throw error
  }
}