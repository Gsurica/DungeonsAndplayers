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

  if (classIndex === "cleric") {
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
                  <Typography>Channel Divinity Charges</Typography>
                  <Button variant="outlined">{ item.class_specific.channel_divinity_charges }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Destroy Undead</Typography>
                  <Button variant="outlined">{ item.class_specific.destroy_undead_cr }</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "druid") {
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
                  <Typography>Wild shape Fly</Typography>
                  <Button variant="outlined">{ item.class_specific.wild_shape_fly ? "can use!" : "can't use!" }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>wild shape swim</Typography>
                  <Button variant="outlined">{ item.class_specific.wild_shape_swim ? "can use!" : "can't use!" }</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>wild shape max</Typography>
                  <Button variant="outlined">{ item.class_specific.wild_shape_max_cr}</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "fighter") {
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
                  <Typography>Action surges</Typography>
                  <Button variant="outlined">{ item.class_specific.action_surges}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Extra attacks</Typography>
                  <Button variant="outlined">{ item.class_specific.extra_attacks}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>indomitable uses</Typography>
                  <Button variant="outlined">{ item.class_specific.indomitable_uses}</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "monk") {
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
                  <Typography>Ki points</Typography>
                  <Button variant="outlined">{ item.class_specific.ki_points}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Unarmored moviment</Typography>
                  <Button variant="outlined">{ item.class_specific.unarmored_movement}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Martial Arts</Typography>
                  <Button variant="outlined" onClick={() => openModalhandler()}>
                    Click!
                  </Button>
                  <InformativeDrawer nameOfClass={classIndex!} item={item} openDrawer={isOpen} closeDrawerHandler={openModalhandler} />
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "paladin") {
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
                  <Typography>Aura range</Typography>
                  <Button variant="outlined">{ item.class_specific.aura_range}</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "ranger") {
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
                  <Typography>Favored Enemies</Typography>
                  <Button variant="outlined">{ item.class_specific.favored_enemies}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Favored terrains</Typography>
                  <Button variant="outlined">{ item.class_specific.favored_terrain}</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "rogue") {
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
              </Box>
              <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Sneak Attack</Typography>
                  <Button variant="outlined" onClick={() => openModalhandler()}>
                    Click!
                  </Button>
                  <InformativeDrawer nameOfClass={classIndex!} item={item} openDrawer={isOpen} closeDrawerHandler={openModalhandler} />
                </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "warlock") {
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
                  <Typography>Invocations knowns</Typography>
                  <Button variant="outlined">{ item.class_specific.invocations_known}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Mystic Arcanum lvl6</Typography>
                  <Button variant="outlined">{ item.class_specific.mystic_arcanum_level_6}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Mystic Arcanum lvl7</Typography>
                  <Button variant="outlined">{ item.class_specific.mystic_arcanum_level_7}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Mystic Arcanum lvl8</Typography>
                  <Button variant="outlined">{ item.class_specific.mystic_arcanum_level_8}</Button>
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: '100%',
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1
                }}>
                  <Typography>Mystic Arcanum lvl9</Typography>
                  <Button variant="outlined">{ item.class_specific.mystic_arcanum_level_9}</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          </Box>
      </>
    )
  }

  if (classIndex === "wizard") {
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
                  <Typography>Arcane recovery</Typography>
                  <Button variant="outlined">{ item.class_specific.arcane_recovery_levels}</Button>
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