import axios from 'axios'
import { ClassMetaData, Results } from './interfaces/classesModels';

export const getUserClasses = async () => {
  const request = await axios.get<Results>("https://www.dnd5eapi.co/api/classes/");
  return request.data
}

export const getOneClass = async (index: string) => {
  const request = await axios.get<ClassMetaData>(`https://www.dnd5eapi.co/api/classes/${index}`)
  return request.data
}