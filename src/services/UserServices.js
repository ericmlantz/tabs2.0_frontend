import Client from './api'
import { BACKEND } from '../global'

export const GetAllUsers = async () => {
  try {
    const res = await Client.get(`${BACKEND}/users/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }
  

export const GetUser = async (pk) => {
try {
  const res = await Client.get(`${BACKEND}/users/${pk}`)
  return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (id) => {
  const res = await Client.delete(`${BACKEND}users/delete/${id}`)
}

export const UpdateUser = async (pk, data) => {
  try {
    const res = await Client.put(`${BACKEND}/users/update/${pk}`, data)
  } catch (error) {
    throw error
  }
}