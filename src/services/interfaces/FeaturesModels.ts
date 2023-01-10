export interface FeaturesModels {
  class: ClassFeat 
  desc: string[] 
  index: string 
  level: number 
  name: string 
  prerequisites: any 
  subclass: ClassFeat 
  url: string
  parent: ClassFeat
}

export interface ClassFeat {
  index: string 
  name: string
  url: string 
}