import Client from "./api"

export const CreatePage = async (data) => {
  try {
    const res = await Client.post(`http://localhost:3001/pages/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetAllPages = async () => {
  try {
    const res = await Client.get(`http://localhost:3001/pages/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const DeletePage = async (id) => {
  try {
    const res = await Client.delete(`http://localhost:3001/pages/delete/${id}`)
    return res.data
    } catch (error) {
      throw error
    }
  }

  export const UpdatePage = async (pk, data) => {
    try {
      const res = await Client.put(`/user/update/${pk}`, data)
    } catch (error) {
      throw error
    }
  }