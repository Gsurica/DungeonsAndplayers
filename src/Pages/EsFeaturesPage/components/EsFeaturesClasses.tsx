import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { FeaturesModels } from "../../../services/interfaces/FeaturesModels"

export interface EsFeaturesClassTypes {
  item: FeaturesModels
}

export const EsFeaturesClasse: React.FC<EsFeaturesClassTypes> = ({ item }) => {
  return (
    <Grid item marginBottom={3}>

      <Card>
        <CardContent>
          <Grid container flexDirection={"column"}>
            <Grid item>
              <Box sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <Typography>Class</Typography>
                <Button variant="outlined">{ item.class.name }</Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Grid>
  )
}