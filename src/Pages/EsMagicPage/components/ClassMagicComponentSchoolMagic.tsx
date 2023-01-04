import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"

interface ClassMagicComponentSchoolMagicTypes {
  dataType: SpellsGenericModel
}

export const ClassMagicComponentSchoolMagic: React.FC<ClassMagicComponentSchoolMagicTypes> = ({ dataType }) => {
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
            School Magic
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
                justifyContent: "center"
              }}>
                <Button variant="outlined">{ dataType?.school.name }</Button>
              </Box>
            </Grid>

            </Grid>
          </CardContent>
        </Card>

        </Grid>
    </>
  )
}