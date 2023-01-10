import axios from 'axios'
import { ClassLevelModels,  ClassMetaData, Results } from './interfaces/classesModels';
import { ClassMagicModels } from './interfaces/EspecificClassMagicModels';
import { FeaturesModels } from './interfaces/FeaturesModels';
import { ProfiencienciesModels } from './interfaces/ProficienciesModels';
import { SkillMetaData, SkillModelData, SkillsModels } from './interfaces/SkillsModels';

export const getUserClasses = async () => {
  const request = await axios.get<Results>("https://www.dnd5eapi.co/api/classes/");
  return request.data
}

export const getOneClass = async (index: string) => {
  const request = await axios.get<ClassMetaData>(`https://www.dnd5eapi.co/api/classes/${index}`)
  return request.data
}

export const getClassMagic = async (index: string) => {
  const request = await axios.get<ClassMagicModels>(`https://www.dnd5eapi.co/api/classes/${index}/spells`)
  return request.data
}

export const getClassLevels = async (index: string) => {
  const request = await axios.get<ClassLevelModels[]>(`https://www.dnd5eapi.co/api/classes/${index}/levels`)
  return request.data
}

export const getAllFeats = async () => {
  const request = await axios.get(`https://www.dnd5eapi.co/api/features`)
  return request.data
}

export const getOneFeats = async (index: string) => {
  const request = await axios.get<FeaturesModels>(`https://www.dnd5eapi.co/api/features/${index}`)
  return request.data
}

export const getAllskills = async () => {
  const request = await axios.get<SkillsModels>(`https://www.dnd5eapi.co/api/skills`)
  return request.data
}

export const getOneSkill = async (index: string) => {
  const request = await axios.get<SkillModelData>(`https://www.dnd5eapi.co/api/skills/${index}`)
  return request.data
}

export const getAllProficiencies = async () => {
  const request = await axios.get<ProfiencienciesModels>(`https://www.dnd5eapi.co/api/proficiencies`)
  return request.data
}

