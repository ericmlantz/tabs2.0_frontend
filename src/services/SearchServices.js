import Client from "./api"

export const CreateSearch = async (data) => {
  try {
    const res = await Client.post(`/searches/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetAllSearches = async () => {
  try {
    const res = await Client.get(`/searches/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetSearchByPk = async (id) => {
  try {
    const res = await Client.get(`/searches/${id}`)
    return res.data
    } catch (error) {
      throw error
    }
  }