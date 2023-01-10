import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { FeaturesModels } from "../../../services/interfaces/FeaturesModels"

export interface EsFeaturesParentsTypes {
  item: FeaturesModels
}

export const EsFeaturesParents: React.FC<EsFeaturesParentsTypes> = ({ item }) => {
  return (
    <Grid item>

      <Card>
        <Box sx={{
          padding: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <Typography variant="h4">Parents</Typography>
        </Box>
        <CardContent>
          <Box>
            {
              item.parent ? (
                <Box sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  textALign: "center"
                }}>
                  <Button variant="outlined">{ item.parent.name }</Button>
                </Box>
              ) : (
                <Button variant="outlined">This feat doesn't need a parent</Button>
              )
            }
          </Box>
        </CardContent>
      </Card>

    </Grid>
  )
}