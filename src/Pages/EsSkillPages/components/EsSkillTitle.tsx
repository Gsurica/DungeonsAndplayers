import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { SkillMetaData, SkillModelData } from "../../../services/interfaces/SkillsModels"

export interface EsSkillTitleTypes {
  item: SkillModelData
}

export const EsSkillTitle: React.FC<EsSkillTitleTypes> = ({ item }) => {
  return (
    <Grid item marginTop={1}>

      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography variant="h5">{ item.name }</Typography>
      </Box>

    </Grid>
  )
}