import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"

interface ClassMagicComponentDescriptionTypes {
  dataType: SpellsGenericModel
}

export const ClassMagicComponentDescription: React.FC<ClassMagicComponentDescriptionTypes> = ({ dataType }) => {
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
            Description
          </Typography>
        </Box>

        </Grid>

        <Grid item>

        <Card>
          <CardContent>
            <Grid container justifyContent={"space-around"} flexDirection="column" spacing={4}>

              {
                dataType?.desc! && (
                  dataType.desc.map(desc => {
                    return (
                      <Grid item>
                        <Box sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center"
                        }}>
                          <Button variant="outlined">{ desc }</Button>
                        </Box>
                      </Grid>
                    )
                  })
                )
              }

            </Grid>
          </CardContent>
        </Card>

      </Grid>
    </>
  )
}