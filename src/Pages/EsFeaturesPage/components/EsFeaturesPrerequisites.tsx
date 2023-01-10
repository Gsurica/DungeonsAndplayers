import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { FeaturesModels } from "../../../services/interfaces/FeaturesModels"

export interface EsFeaturesPrerequisitesTypes {
  item: FeaturesModels
}

export const EsFeaturesPrerequisites: React.FC<EsFeaturesPrerequisitesTypes> = ({ item }) => {
  return (
    <Grid item>

      <Card>
        <Box sx={{
          padding: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <Typography variant="h4">Pre requisite</Typography>
        </Box>
        <CardContent>
          <Box>
            {
              item.prerequisites.length > 0 ? (
                <Typography></Typography>
              ) : (
                <Button variant="outlined">This feat doesn't need a prerequisite</Button>
              )
            }
          </Box>
        </CardContent>
      </Card>

    </Grid>
  )
}