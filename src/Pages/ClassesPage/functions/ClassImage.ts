import barbarianImage from '../../../assets/images/barbarian.jpg'
import secondBarbarianImage from '../../../assets/images/secondBarbarian.jpg'
import rogueImage from '../../../assets/images/rogue.png'
import secondRogueImage from '../../../assets/images/secondRogue.jpg'
import bardImage from '../../../assets/images/bard.jpg'
import secondBardImage from '../../../assets/images/secondBard.jpg'
import clericImage from '../../../assets/images/cleric.jpg'
import secondClericImage from '../../../assets/images/secondCleric.png'
import druidImage from '../../../assets/images/druid.jpg'
import secondDruidImage from '../../../assets/images/secondDruid.jpg'
import knightImage from '../../../assets/images/knight.jpg'
import secondKnightImage from '../../../assets/images/secondKnight.jpg'
import monkImage from '../../../assets/images/monk.png'
import secondMonkImage from '../../../assets/images/secondMonk.jpg'
import paladinImage from '../../../assets/images/paladin.jpg'
import secondPaladinImage from '../../../assets/images/secondPaladin.jpg'
import rangerImage from '../../../assets/images/ranger.jpg'
import secondRanger from '../../../assets/images/secondRanger.jpg'
import sorcererImage from '../../../assets/images/sorcerer.jpg'
import secondSorcererImage from '../../../assets/images/secondSorcerer.jpg'
import witchImage from '../../../assets/images/witch.jpg'
import secondWitchImage from '../../../assets/images/secondWitch.jpg'
import wizardImage from '../../../assets/images/wizard.jpg'
import secondWizardImage from '../../../assets/images/secondWizard.jpg'

export const ClassImage = (classRpg: any) => {
    const imageClassesObj: any = {
      barbarian: barbarianImage,
      rogue: rogueImage,
      bard: bardImage,
      cleric: clericImage,
      druid: druidImage,
      fighter: knightImage,
      monk: monkImage,
      paladin: paladinImage,
      ranger: rangerImage,
      sorcerer: sorcererImage,
      warlock: witchImage,
      wizard: wizardImage,
      default: "no image!"
    }
    return imageClassesObj[classRpg] || imageClassesObj.default
}

export const EsClassImage = (classRpg: any) => {
  const imageClassesObj: any = {
    barbarian: secondBarbarianImage,
    rogue: secondRogueImage,
    bard: secondBardImage,
    cleric: secondClericImage,
    druid: secondDruidImage,
    fighter: secondKnightImage,
    monk: secondMonkImage,
    paladin: secondPaladinImage,
    ranger: secondRanger,
    sorcerer: secondSorcererImage,
    warlock: secondWitchImage,
    wizard: secondWizardImage,
    default: "no image!"
  }
  return imageClassesObj[classRpg] || imageClassesObj.default
}