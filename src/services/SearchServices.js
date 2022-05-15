import Client from "./api"

export const CreateSearch = async (data) => {
  try {
    const res = await Client.post(`http://localhost:3001/searches/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetAllSearches = async () => {
  try {
    const res = await Client.get(`http://localhost:3001/searches/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetSearchByPk = async (id) => {
  try {
    const res = await Client.get(`http://localhost:3001/searches/${id}`)
    return res.data
    } catch (error) {
      throw error
    }
  }