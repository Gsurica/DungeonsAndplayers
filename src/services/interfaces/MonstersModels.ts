export interface MonsterMetaData {
  name: string 
  url: string 
  index: string
}

export interface MonterIndexData {
  count: number
  results: MonsterMetaData[]
}

export interface MonsterActionsInsideModel {
  action_name: string
  count: number
  type: string
} 


export interface MonsterDamageModels {
  damage_dice: string
  damage_type: MonsterMetaData
}

export interface DcMonsterModels {
  dc_type: MonsterMetaData
  dc_value: number
  success_type: string
}

export interface MonsterActionsModel {
  actions: MonsterActionsInsideModel[]
  desc: string 
  multiattack_type?: string
  name: string
  attack_bonus: number
  damage: MonsterDamageModels[]
  dc: DcMonsterModels
}

export interface MonsterLegendaryActionsModels {
  desc: string
  name: string
  attack_bonus: number
  damage: MonsterDamageModels[]
}

export interface MonsterSensesModel {
  darkvision: string
  passive_perception: number
}

export interface MonsterSpecialHabilitiesModel {
  desc: string
  name: string
  dc: DcMonsterModels
}

export interface MonsterSpeedsModels {
  swim: string
  walk: string
}

export interface MonsterProficienciesModels {
  value: number
  proficiency: MonsterMetaData
}

export interface MonsterModel {
  actions: MonsterActionsModel[]
  alignment: string
  armor_class: number
  challenge_rating: number
  charisma: number
  condition_immunities: MonsterMetaData[]
  constitution: number
  damage_immunities: string[]
  damage_resistances: string[]
  damage_vulnerabilities: string[]
  dexterity: number
  hit_dice: string
  hit_points: number
  hit_points_roll: string
  image: string
  index: string
  intelligence: number
  languages: string
  legendary_actions: MonsterLegendaryActionsModels[]
  name: string
  proficiencies: MonsterProficienciesModels[] 
  senses: MonsterSensesModel
  size: string
  special_abilities: MonsterSpecialHabilitiesModel[]
  speed: MonsterSpeedsModels
  strength: number
  subtype: string
  type: string
  url: string
  wisdom: number
  xp: number
}