import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { SpellsGenericModel } from "../../../services/interfaces/EspecificClassMagicModels"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"
import { useNavigate } from "react-router-dom"

interface ClassMagicComponentClassesTypes {
  dataType: SpellsGenericModel
}

export const ClassMagicComponentClasses: React.FC<ClassMagicComponentClassesTypes> = ({ dataType }) => {

  const navigate = useNavigate()

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
            Classes
          </Typography>
        </Box>

        </Grid>

        <Grid item>

        <Card>
          <CardContent>
            <Grid container justifyContent={"space-around"} flexDirection="column" spacing={4}>

              {
                dataType?.classes.length! > 0 && (
                  dataType?.classes.map(classRpg => {
                    return (
                      <Grid item>
                        <Box sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center"
                        }}>
                          <Button variant="outlined"
                            onClick={() => {
                              navigate(`/class/${classRpg.index}`)
                              scrollUp()
                            }}
                          >
                            { classRpg.name }
                          </Button>
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