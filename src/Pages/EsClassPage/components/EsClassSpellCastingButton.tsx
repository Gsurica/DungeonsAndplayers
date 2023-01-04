import { Box, Button } from "@mui/material"
import { ClassMetaData } from "../../../services/interfaces/classesModels"
import { useNavigate, useParams } from 'react-router-dom'
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"


interface EsClassSpellCastingButtonTypes {
  dataSpellCastingButton: ClassMetaData
}

export const EsClassSpellCastingButton: React.FC<EsClassSpellCastingButtonTypes> = ({ dataSpellCastingButton }) => {

  const navigate = useNavigate()
  const { classIndex } = useParams()

  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      justifyContent: "center"
    }}>
      {
        dataSpellCastingButton?.spellcasting && (
          <Button variant="contained"
            onClick={() => {
              navigate(`/class/${classIndex}/spells`)
              scrollUp()
            }}
          >
            See the { dataSpellCastingButton?.name } spells here!
          </Button>
        )
      }
    </Box>
  )
}