import Client from "./api"

export const CreatePage = async (data) => {
  try {
    const res = await Client.post(`/pages/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetAllPages = async () => {
  try {
    const res = await Client.get(`/pages/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const DeletePage = async (id) => {
  try {
    const res = await Client.delete(`/pages/delete/${id}`)
    return res.data
    } catch (error) {
      throw error
    }
  }

  export const UpdatePage = async (pk, data) => {
    try {
      const res = await Client.put(`/pages/update/${pk}`, data)
    } catch (error) {
      throw error
    }
  }