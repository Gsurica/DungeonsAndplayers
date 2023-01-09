import { Drawer, Grid, Typography, Box, Button } from '@mui/material'
import { Close } from '@mui/icons-material'
import { ClassLevelModels } from '../../services/interfaces/classesModels'
import { useParams } from 'react-router-dom'

export interface DrawerTypes {
  openDrawer: boolean
  closeDrawerHandler: () => void
  nameOfClass: string
  item: ClassLevelModels
}

export const InformativeDrawer: React.FC<DrawerTypes> = ({ openDrawer, closeDrawerHandler, nameOfClass, item }) => {

  const { classIndex } = useParams()

  return (
    <Drawer open={openDrawer} elevation={4} anchor='right'>
      <Grid container justifyContent={"space-between"} flexDirection={"column"} alignItems={"center"} spacing={8}>

      <Grid item>
        <Box sx={{
          padding: "20px",
          marginTop: "10px",
          backgroundColor: "primary",
          width: "auto",
          display: "flex",
          alignItems: "center"
        }} color="secondary">
          <Typography variant={"body1"} component={"h1"} fontWeight="bold" fontStyle={"italic"}>
            { nameOfClass }
          </Typography>
          <Button sx={{
            width: "10%"
          }} onClick={closeDrawerHandler}>
            <Close />
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}> 
          
        </Box>
      </Grid>
      <Grid item>
        {
          item.index !== undefined && classIndex! === "sorcerer" ? (
            <Grid container justifyContent={"space-between"} flexDirection={"column"} alignItems={"center"} spacing={4}>
              <Grid item>
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}>
                  <Typography>Sorcery Points!</Typography>
                  <Button>{ item.class_specific.sorcery_points }</Button>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}>
                  {
                    item.class_specific.creating_spell_slots.length > 0 && classIndex === 'sorcerer' ? (
                      <>
                        <Typography>Creating spells slots!</Typography>
                          <>
                          { item.class_specific.creating_spell_slots.map(item => {
                            return (
                              <Box sx={{
                                display: "flex",
                                padding: 5
                              }}>
                                <Box sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  padding: 1
                                }}>
                                  <Typography>Sorcery cost!</Typography>
                                  <Button>
                                    { item.sorcery_point_cost }
                                  </Button>
                                </Box>
                                <Box  sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  padding: 1
                                }}>
                                  <Typography>Spell slot level</Typography>
                                  <Button>
                                    { item.spell_slot_level }
                                  </Button>
                                </Box>
                              </Box>
                            )
                          }) }
                          </>
                      </>
                    ) : <Typography></Typography>
                  }
                </Box>
              </Grid>
            </Grid>
          ) : null
        }
        {
          item.index !== undefined && item.class_specific.martial_arts && classIndex === 'monk' ? (
            <>
              <Box sx={{
                display: "flex",
                width: "100%",
                textAlign: "center",
                justifyContent: "center"
              }}>
                <Typography>Martial Arts!</Typography>
              </Box>
              <Box sx={{
                display: "flex",
                padding: 5
              }}>
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 1
                }}>
                  <Typography>Dice count</Typography>
                  <Button>
                    { item.class_specific.martial_arts.dice_count }
                  </Button>
                </Box>
                <Box  sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 1
                }}>
                  <Typography>Dice value</Typography>
                  <Button>
                    { item.class_specific.martial_arts.dice_value }
                  </Button>
                </Box>
              </Box>               
            </>
          ) : (
            <Typography></Typography>
          )
        }
        {
          item.index !== undefined && item.class_specific.sneak_attack && classIndex === 'rogue' ? (
            <>
              <Box sx={{
                display: "flex",
                width: "100%",
                textAlign: "center",
                justifyContent: "center"
              }}>
                <Typography>Sneak attack!</Typography>
              </Box>
              <Box sx={{
                display: "flex",
                padding: 5
              }}>
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 1
                }}>
                  <Typography>Dice count</Typography>
                  <Button>
                    { item.class_specific.sneak_attack.dice_count }
                  </Button>
                </Box>
                <Box  sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 1
                }}>
                  <Typography>Dice value</Typography>
                  <Button>
                    { item.class_specific.sneak_attack.dice_value }
                  </Button>
                </Box>
              </Box>               
            </>
          ) : (
            <Typography></Typography>
          )
        }
      </Grid>

      </Grid>

    </Drawer>
  )
}