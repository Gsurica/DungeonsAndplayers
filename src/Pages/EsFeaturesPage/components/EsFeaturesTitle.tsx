import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { FeaturesModels } from "../../../services/interfaces/FeaturesModels"
import { EsFeaturesClasse } from "./EsFeaturesClasses"

export interface EsFeaturesTitleTypes {
  item: FeaturesModels
}

export const EsFeaturesTitle: React.FC<EsFeaturesTitleTypes> = ({ item }) => {
  return (
    <Grid item marginTop={3}>

      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 1,
        textAlign: "center"
      }}>
        <Typography variant="h5">{ item.name }</Typography> 
      </Box>

      <EsFeaturesClasse item={item} />

      <Card>
        <CardContent>
          <Grid container flexDirection={"column"}>
            <Grid item>
              <Box sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}>
                <Typography>Level</Typography>
                <Button variant="outlined">{ item.level }</Button>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}>
                  <Box sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}>
                    <Typography sx={{ marginBottom: 1 }}>Description</Typography>
                    {
                      item.desc.length > 0 ? (
                        item.desc.map(desc => {
                          return (
                            <Button variant="outlined">
                              { desc }
                            </Button>
                          )
                        })
                      ) : (
                        <Typography> No type </Typography>
                      )
                    }
                  </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Grid>
  )
}