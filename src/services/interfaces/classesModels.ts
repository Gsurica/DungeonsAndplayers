export interface Results {
  results: ClassData[]
}

export interface ClassData {
  index: string
  name: string 
  url: string
}

export interface ClassMetaData {
  name: string
  hit_die: number
  choose: number 
  type: string
  multi_classing: MultiClassingModel
  proficiencies: ClassData[]
  proficiency_choices: GenericChoiceModel[]
  savingThrows: ClassData[]
  spellcasting?: SpellCastingMetaData
  starting_equipment: InitialEquipamentModel[]
  starting_equipment_options: any[]
}

// multiclassing
export interface MultiClassingModel {
  multi_classing: MultiClassingModelData[]
  proficiencies: ClassData[]
}

export interface MultiClassingModelData {
  ability_score: ClassData[]
  minimum_score: number
}

// generic model
export interface GenericChoiceModel {
  choose: number
  desc: string
  from: FromModel
  type: string
}

// from model 
export interface FromModel {
  option_set_type: string
  options: OptionsObjectModel[]
  equipment_category?: ClassData[]
  
}

// options model
export interface OptionsObjectModel {
  item: ClassData
  option_type: string
  choice?: GenericChoiceModel
}

// equipament models

export interface InitialEquipamentModel {
  equipament: ClassData[] 
  quantity: number
}

// spellCasting models 

export interface SpellCastingMetaData {
  info: SpellCastingInfoData[]
  level: number
  spellcasting_ability: ClassData
}

export interface SpellCastingInfoData {
  name: string
  desc: string[]
}





