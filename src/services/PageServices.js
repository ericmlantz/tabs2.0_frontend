import Client from "./api"

export const CreatePage = async (data) => {
  try {
    const res = await Client.post(`http://localhost:3001/pages/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

