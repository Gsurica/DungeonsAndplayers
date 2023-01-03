import { Box, Grid, Typography, Divider } from "@mui/material"
import { ClassesPage } from "../ClassesPage/ClassesPage"
import Header from './components/Header'

export const Home = () => {
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} display="flex">
      <Grid item xs={12}>
        <Divider />
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px"
        }}>
          <Typography variant="h3">
            Classes!
          </Typography>
          <Divider />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <ClassesPage />
      </Grid>
    </Grid>
  )
}