export interface ClassIndexMetaData {
  index: string 
  name: string
  url: string
}

export interface ClassMagicModels {
  count: number
  results: ClassIndexMetaData[]
}

export interface SpellsGenericModel {
  casting_time: string 
  classes: ClassIndexMetaData[]
  components: string[]
  dc: DcModels
  desc: string[]
  duration: string
  higher_level?: string[]
  index: string
  level: number
  material: string
  name: string
  range: string
  ritual: boolean
  concentration: boolean
  school: ClassIndexMetaData
  subclasses: ClassIndexMetaData 
}

export interface DcModels {
  dc_success: string 
  dc_type: ClassIndexMetaData
}

export interface MagicLevelsModel {
  level: number
}
export interface AllMagic {
  count: number
  results: ClassIndexMetaData[]
}
