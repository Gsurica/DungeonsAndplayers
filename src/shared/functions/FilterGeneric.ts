import { AllMagic, ClassMagicModels } from "../../services/interfaces/EspecificClassMagicModels"
import { MonterIndexData } from "../../services/interfaces/MonstersModels"
import { SkillsModels } from "../../services/interfaces/SkillsModels"

export function filterFunction (change: string, data: AllMagic | MonterIndexData | ClassMagicModels | SkillsModels) {
  const dataList = data?.results

  if (dataList)
    return dataList.filter(item => item.name.toLowerCase().includes(change))
}