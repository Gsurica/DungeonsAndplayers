import axios from "axios"
import { MonterIndexData } from "./interfaces/MonstersModels"

export const getAllMonsters = async () => {
  const request = await axios.get<MonterIndexData>("https://www.dnd5eapi.co/api/monsters")
  return request.data
}