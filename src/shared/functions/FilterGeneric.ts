import { AllMagic, ClassMagicModels } from "../../services/interfaces/EspecificClassMagicModels"
import { MonterIndexData } from "../../services/interfaces/MonstersModels"

export function filterFunction (change: string, data: AllMagic | MonterIndexData | ClassMagicModels) {
  const dataList = data?.results

  if (dataList)
    return dataList.filter(item => item.name.toLowerCase().includes(change))
}