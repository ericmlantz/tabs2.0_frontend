import Client from './api'

export const GetAllInterests = async () => {
  try {
    const res = await Client.get(`http://localhost:3001/interests/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const CreateInterest = async (data) => {
  try {
    const res = await Client.post(`http://localhost:3001/interests/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetInterestByPk = async (id) => {
    try {
      const res = await Client.get(`http://localhost:3001/interests/${id}`)
      return res.data
      } catch (error) {
        throw error
      }
    }