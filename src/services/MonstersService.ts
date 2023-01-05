import axios from "axios"
import { MonsterModel, MonterIndexData } from "./interfaces/MonstersModels"

export const getAllMonsters = async () => {
  const request = await axios.get<MonterIndexData>("https://www.dnd5eapi.co/api/monsters")
  return request.data
}

export const getOneMonster = async (index: string) => {
  const request = await axios.get<MonsterModel>(`https://www.dnd5eapi.co/api/monsters/${index}`)
  return request.data
}