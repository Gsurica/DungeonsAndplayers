import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"

interface ClassMagicComponentHigherLevelsTypes {
  dataType: SpellsGenericModel
}

export const ClassMagicComponentHigherLevels: React.FC<ClassMagicComponentHigherLevelsTypes> = ({ dataType }) => {
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
            Higher Levels
          </Typography>
        </Box>

        </Grid>

        <Grid item>

        <Card>
          <CardContent>
            <Grid container justifyContent={"space-around"} flexDirection="column" spacing={4}>

              {
                dataType?.higher_level && dataType?.higher_level.length > 0 ? (
                  dataType?.higher_level.map(higherLevel => {
                    return (
                      <Grid item>
                        <Box sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center"
                        }}>
                          <Button variant="outlined">{ higherLevel }</Button>
                        </Box>
                      </Grid>
                    )
                  })
                ) : (
                  <Grid item>
                    <Box sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center"
                    }}>
                      <Button variant="outlined">This magic doesn't have any higher levels!</Button>
                    </Box>
                  </Grid>
                ) 
              }

            </Grid>
          </CardContent>
        </Card>

      </Grid>
    </>
  )
}