import firstEquipmentImage from '../../assets/images/EquipmentImages/EquipmentStart.png'
import secondEquipmentImage from '../../assets/images/EquipmentImages/secondEquipmentStart.jpg'
import thirdEquipmentImage from '../../assets/images/EquipmentImages/thirdEquipment.jpg'
import fourthEquipmentImage from '../../assets/images/EquipmentImages/FourthEquipment.jpg'
import fifithEquipmentImage from '../../assets/images/EquipmentImages/fifithEquipment.jpg'


export const EquipmentImagesRandom = (number: number) => {
  const randomEquipmentImages: any = {
    0: firstEquipmentImage,
    1: secondEquipmentImage,
    2: thirdEquipmentImage,
    3: fourthEquipmentImage,
    4: fifithEquipmentImage,
  }

  return randomEquipmentImages[number] || ""

}

export const randomEquipmentNumber = (max: number) => {
  return Math.ceil(Math.random() * max)
}