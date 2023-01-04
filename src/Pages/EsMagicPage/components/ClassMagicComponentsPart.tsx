import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"
import { TranslatingMaterials } from "../../../shared/functions/TranslatingMaterials"

interface ClassMagicComponentsPartTypes {
  dataType: SpellsGenericModel
}

export const ClassMagicComponentsPart: React.FC<ClassMagicComponentsPartTypes> = ({ dataType }) => {
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
            Components
          </Typography>
        </Box>

        </Grid>

        <Grid item>

        <Card>
          <CardContent>
            <Grid container justifyContent={"space-around"} flexDirection="column" spacing={4}>

              {
                dataType?.components.length! > 0 ? (
                  dataType?.components.map(material => {
                    return (
                      <Grid item>
                        <Box sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between"
                        }}>
                          <Button variant="outlined">{ material }</Button>
                          <Typography>{ TranslatingMaterials(material) }</Typography>
                        </Box>
                      </Grid>
                    )
                  })
                ) : (
                  <Grid item>
                    <Box sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between"
                    }}>
                      <Typography>This magic doesn't use any component!</Typography>
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