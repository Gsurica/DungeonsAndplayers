import { Button, Card, CardContent, Grid, Typography, Box } from "@mui/material"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"

interface ClassMagicComponentProps {
  dataType: SpellsGenericModel
}

export const ClassMagicComponent: React.FC<ClassMagicComponentProps> = ({ dataType }) => {

  return (
    <>
      <Grid item marginTop={3}>

        <Box sx={{
          width: "100%",
          backgroundColor: "#abdbe3",
          textAlign: "center",
          padding: 1,
          boxSizing: "border-box",

        }}>
          <Typography variant="h5" component="h1">
            { dataType?.name }
          </Typography>
        </Box>

        </Grid>

        <Grid item>

        <Card>
          <CardContent>
            <Grid container justifyContent={"space-around"} flexDirection="column" spacing={4}>
            <Grid item>
                <Box sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between"
                }}>
                  <Button variant="outlined">Level</Button>
                  <Typography>{ dataType?.level }</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                  }}>
                    <Button variant="outlined">Range</Button>
                    <Typography>{ dataType?.range }</Typography>
                  </Box>
              </Grid>
              <Grid item>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                  }}>
                    <Button variant="outlined">Concentration</Button>
                    <Typography>{ dataType?.concentration ? "Yes" : "No" }</Typography>
                  </Box>
              </Grid>
              <Grid item>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                  }}>
                    <Button variant="outlined">Casting Time</Button>
                    <Typography>{ dataType?.casting_time }</Typography>
                  </Box>
              </Grid>
              <Grid item>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                  }}>
                    <Button variant="outlined">Duration</Button>
                    <Typography>{ dataType?.duration }</Typography>
                  </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        </Grid>
    </>
  )
}