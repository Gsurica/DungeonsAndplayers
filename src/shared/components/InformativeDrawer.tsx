import { Drawer, Grid, Typography, Box, Button } from '@mui/material'
import { Close } from '@mui/icons-material'
import { ClassLevelModels } from '../../services/interfaces/classesModels'

export interface DrawerTypes {
  openDrawer: boolean
  closeDrawerHandler: () => void
  nameOfClass: string
  item: ClassLevelModels
}

export const InformativeDrawer: React.FC<DrawerTypes> = ({ openDrawer, closeDrawerHandler, nameOfClass, item }) => {
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
          item.index !== undefined && item.index === "sorcerer" && (
            <Grid container spacing={4}>
              <Grid item>
                
              </Grid>
            </Grid>
          ) 
        }
      </Grid>

      </Grid>

    </Drawer>
  )
}