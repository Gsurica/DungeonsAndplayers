export const ClassFeaturesFunctions = (item: any): string => {
  const classRequestObj: any ={
    barbarian: `https://www.dnd5eapi.co/api/classes/barbarian/levels`,
    bard: `https://www.dnd5eapi.co/api/classes/bard/levels`,
    sorcerer: `https://www.dnd5eapi.co/api/classes/sorcerer/levels`,
    cleric: `https://www.dnd5eapi.co/api/classes/cleric/levels`,
    rogue: `https://www.dnd5eapi.co/api/classes/rogue/levels`,
    wizard: `https://www.dnd5eapi.co/api/classes/wizard/levels`,
    druid: `https://www.dnd5eapi.co/api/classes/druid/levels`,
    fighter: `https://www.dnd5eapi.co/api/classes/fighter/levels`,
    monk: `https://www.dnd5eapi.co/api/classes/monk/levels`,
    paladin: `https://www.dnd5eapi.co/api/classes/paladin/levels`,
    ranger: `https://www.dnd5eapi.co/api/classes/ranger/levels`,
    warlock: `https://www.dnd5eapi.co/api/classes/warlock/levels`,
  }
  return classRequestObj[item] || ""
}