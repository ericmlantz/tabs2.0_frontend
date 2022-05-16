import Client from "./api"
import { BACKEND } from "../global"

export const CreateSearch = async (data) => {
  try {
    const res = await Client.post(`${BACKEND}/searches/create`, data)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetAllSearches = async () => {
  try {
    const res = await Client.get(`${BACKEND}/searches/all`)
    return res.data
    } catch (error) {
      throw error
    }
  }

export const GetSearchByPk = async (id) => {
  try {
    const res = await Client.get(`${BACKEND}/searches/${id}`)
    return res.data
    } catch (error) {
      throw error
    }
  }