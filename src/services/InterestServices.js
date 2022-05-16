import Client from './api'

export const GetAllInterests = async () => {
  try {
    const res = await Client.get(`/interests/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const CreateInterest = async (data) => {
  try {
    const res = await Client.post(`/interests/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetInterestByPk = async (id) => {
  try {
    const res = await Client.get(`/interests/${id}`)
    return res.data
    } catch (error) {
      throw error
    }
  }