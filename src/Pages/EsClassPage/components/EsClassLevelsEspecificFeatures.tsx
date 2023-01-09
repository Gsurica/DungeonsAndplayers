import { Button, Card, CardContent, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { ClassLevelModels } from "../../../services/interfaces/classesModels"
import { InformativeDrawer } from "../../../shared/components/InformativeDrawer"
import { BasicModal } from "../../../shared/components/Modal"

interface EsClassLevelsEspecificFeaturesTypes {
  item: ClassLevelModels
  classIndex: string
}

export const EsClassLevelsEspecificFeatures: React.FC<EsClassLevelsEspecificFeaturesTypes> = ({ classIndex, item }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModalhandler = () => {
    setIsOpen(!isOpen)
  }

  if (classIndex === "barbarian") {
    return (
      <>
        <Box>
          <Card sx={{
            marginTop: 1,
            marginBottom: 1
          }} elevation={10}> 
            <CardContent>
              <Box sx={{
                width: "100%"
              }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Rage count</Typography>
                  <Button variant="outlined">{ item.class_specific.rage_count }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Rage Damage</Typography>
                  <Button variant="outlined">{ item.class_specific.rage_damage_bonus }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Rage Critical Dice</Typography>
                  <Button variant="outlined">{ item.class_specific.brutal_critical_dice }</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "bard") {
    return (
      <>
        <Box>
          <Card sx={{
            marginTop: 1,
            marginBottom: 1
          }} elevation={10}> 
            <CardContent>
              <Box sx={{
                width: "100%"
              }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Song of Rest</Typography>
                  <Button variant="outlined">{ item.class_specific.song_of_rest_die }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Inspiration Dices</Typography>
                  <Button variant="outlined">{ item.class_specific.bardic_inspiration_die }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Magical Secrets max 5</Typography>
                  <Button variant="outlined">{ item.class_specific.magical_secrets_max_5 }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Magical Secrets max 7</Typography>
                  <Button variant="outlined">{ item.class_specific.magical_secrets_max_7 }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Magical Secrets max 9</Typography>
                  <Button variant="outlined">{ item.class_specific.magical_secrets_max_9 }</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
                  
          </Box>
      </>
    )
  }

  if (classIndex === "sorcerer") {
    return (
      <>
        <Box>
          <Card sx={{
            marginTop: 1,
            marginBottom: 1
          }} elevation={10}> 
            <CardContent>
              <Box sx={{
                width: "100%"
              }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Sorcery Points</Typography>
                  <Button variant="outlined">{ item.class_specific.sorcery_points }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Metamagic known</Typography>
                  <Button variant="outlined">{ item.class_specific.metamagic_known }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Create Spell slots</Typography>
                  <Button variant="outlined" onClick={() => openModalhandler()}>
                    Click!
                  </Button>
                  <InformativeDrawer item={item} openDrawer={isOpen} nameOfClass={classIndex!} closeDrawerHandler={openModalhandler} />
                </Box>
              </Box>
            </CardContent>
          </Card>   
        </Box>
    </>
    )
  }

  return (
    <></>
  )
}