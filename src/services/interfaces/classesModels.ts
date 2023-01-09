import { BarbarianEspecifiqueModel } from "./EsClassModels/BarbarianModels"
import { BardlevelModels } from "./EsClassModels/BardModels"
import { RangerLevel } from "./EsClassModels/RangerModels"
import { Sorcererlevel, SorcererSpellsModels } from "./EsClassModels/SorcererModels"

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
  starting_equipment_options: StartingEquipmentOptions[]
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
  equipment: ClassData 
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

export interface StartingEquipmentOptions {
  choose: number
  desc: string
  from: StartingEquipmentFromModel
  type: string
}

export interface StartingEquipmentFromModel {
  option_set_type: string 
  options: StartingEquipmentOptionsFromModel[]
}

export interface StartingEquipmentOptionsFromModel {
  option_type: string
  count: number
  of: ClassData
}

export interface ClassLevelModels {
  ability_score_bonuses: number
  class: ClassData
  class_specific: ClassSpecificModels 
  features: ClassData[]
  index: string
  level: number
  prof_bonus: number
  url: string
}

export interface ClassSpecificModels {
  // ranger
  favored_enemies: number 
  favored_terrain: number

  // sorcerer
  creating_spell_slots: SorcererSpellsModels[] 
  metamagic_known: number
  sorcery_points: number

  // bard
  bardic_inspiration_die: number
  magical_secrets_max_5: number
  magical_secrets_max_7: number
  magical_secrets_max_9: number
  song_of_rest_die: number

  // barbarian
  brutal_critical_dice: number
  rage_count: number
  rage_damage_bonus: number
}





