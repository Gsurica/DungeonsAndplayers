import axios from "axios"
import { AllMagic, SpellsGenericModel } from "./interfaces/EspecificClassMagicModels"

export const getOneSpell = async (index: string) => {
  const request = await axios.get<SpellsGenericModel>(`https://www.dnd5eapi.co/api/spells/${index}`)
  return request.data
}

export const getAllSpell = async () => {
  const request = await axios.get<AllMagic>(`https://www.dnd5eapi.co/api/spells`)
  return request.data
}