import { Button, Drawer, Typography } from "@mui/material";
import { Grid, Box } from '@mui/material'
import { useState } from "react";
import { MagicBookIcon } from "../../../assets/icons/MagicBookIcon";
import { PrincipalPageIcon } from "../../../assets/icons/PrincipalPageIcon";
import { HabilityIcon } from "../../../assets/icons/HabilityIcon";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { useNavigate } from "react-router-dom";

export interface DrawerTypes {
  openDrawer: boolean
  closeDrawerHandler: () => void
}

interface PageItems {
  name: string
  icon: any
  navigate: any
}

const PageItems: PageItems[] = [
  { name: "Home", icon: <MagicBookIcon />, navigate: "/home" },
  { name: "Spells", icon: <PrincipalPageIcon />, navigate: "/spells" },
  { name: "Features", icon: <HabilityIcon />, navigate: "/feat" }
]


export const SideDrawer: React.FC<DrawerTypes> = ({ openDrawer, closeDrawerHandler }) => {

  const navigate = useNavigate()

  return (
    <Drawer elevation={4} open={openDrawer}>

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
              Dungeons and Players!
            </Typography>
            <Button sx={{
              width: "10%"
            }} onClick={closeDrawerHandler}>
              <CloseIcon />
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
            <Typography letterSpacing={2}>
              Pages
            </Typography>
            <Typography padding="5px" fontWeight="bold">
              Where did you want to go?
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          { PageItems.map(page => {
            return (
              <Box sx={{
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                width: "100%",
                flexDirection: "row"
              }}>
                <Button variant="outlined" sx={{
                  width: "200px",
                }}
                onClick={() => {
                  navigate(page.navigate)
                  closeDrawerHandler()
                }}
                >
                  { page.name }
                </Button>
              </Box>
            )
          }) }
        </Grid>
        <Grid item>
          <Box>
            <Typography>
              Made by: <a href="https://github.com/Gsurica">@Gsurica</a>
            </Typography>
          </Box>
        </Grid>

      </Grid>

    </Drawer>
  )

}