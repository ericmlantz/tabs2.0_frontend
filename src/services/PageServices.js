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

  export const GetScreenshot = async (url) => {
    try {
      const res = await Client.get(`https://api.urlbox.io/v1/SLxu31Ni9tVQXx6O/html?url=${url}.com&full_page=true&width=300`)
      return res.data
      } catch (error) {
        throw error
      }
    }
  