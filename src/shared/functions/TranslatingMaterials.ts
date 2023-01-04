export const TranslatingMaterials = (index: string) => {
  const materialsObj: any = {
    V: "Verbal",
    S: "Somatic",
    M: "Material",
  }

  return materialsObj[index] || "Nothing Here!"
}