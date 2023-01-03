export const ClassHabilityName = (hability: any) => {
  const habilityNameObj: any = {
    CHA: "charisma",
    STR: "strength",
    CON: "constitution",
    INT: "intelligence",
    DEX: "dexterity",
    WIS: "wisdom",
    default: "no hability!"
  }

  return habilityNameObj[hability] || habilityNameObj.default
}