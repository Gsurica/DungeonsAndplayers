import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import { SkillModelData } from "../../../services/interfaces/SkillsModels"

export interface EsSkillCoreTypes {
  item: SkillModelData
}

export const EsSkillCore: React.FC<EsSkillCoreTypes> = ({ item }) => {
  return (
    <Grid item>

      <Card>
        <CardContent>

          <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column"
          }}>
            <Box sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}> 
              <Typography>ability score</Typography>
              <Button>{ item.ability_score.name }</Button>
            </Box>
            <Box sx={{
              marginTop: 2
            }}>
              <Typography>Desc</Typography>
              <Box sx={{
                textAlign: "left"
              }}>
                <Button variant="outlined">{ item.desc }</Button>
              </Box>
            </Box>
          </Box>

        </CardContent>
      </Card>

    </Grid>
  )
}