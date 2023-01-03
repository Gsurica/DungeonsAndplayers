import { Box, Button } from "@mui/material"
import { ClassMetaData } from "../../../services/interfaces/classesModels"

interface EsClassSpellCastingButtonTypes {
  dataSpellCastingButton: ClassMetaData
}

export const EsClassSpellCastingButton: React.FC<EsClassSpellCastingButtonTypes> = ({ dataSpellCastingButton }) => {
  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      justifyContent: "center"
    }}>
      {
        dataSpellCastingButton?.spellcasting && (
          <Button variant="contained">See the { dataSpellCastingButton?.name } spells here!</Button>
        )
      }
    </Box>
  )
}