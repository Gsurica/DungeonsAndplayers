import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"

interface ClassMagicComponentsMaterialsTypes {
  dataType: SpellsGenericModel
}

export const ClassMagicComponentsMaterials: React.FC<ClassMagicComponentsMaterialsTypes> = ({ dataType }) => {
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
            Materials
          </Typography>
        </Box>

        </Grid>

        <Grid item>

        <Card>
          <CardContent>
            <Grid container justifyContent={"space-around"} flexDirection="column" spacing={4}>

              {
                dataType?.material ? (
                  <Grid item>
                    <Box sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center"
                    }}>
                      <Button variant="outlined">{ dataType?.material }</Button>
                    </Box>
                  </Grid>
                ) : (
                  <Grid item>
                    <Box sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center"
                    }}>
                      <Button variant="outlined">This magic doesn't use any material!</Button>
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