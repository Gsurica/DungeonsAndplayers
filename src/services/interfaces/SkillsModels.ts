export interface SkillsModels {
  results: SkillMetaData[]
}

export interface SkillModelData {
  index: string 
  name: string 
  desc: string[]
  ability_score: SkillMetaData
  url: string
}

export interface SkillMetaData {
  index: string 
  name: string 
  url: string
}