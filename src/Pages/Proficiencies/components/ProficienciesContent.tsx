import { Box, Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"
import { ProficienciesMetaData } from "../../../services/interfaces/ProficienciesModels"

interface ProficienciesContentTypes {
  Proficiency: ProficienciesMetaData
}

export const ProficienciesContent: React.FC<ProficienciesContentTypes> = ({ Proficiency }) => {
  
  const navigate = useNavigate()
  
  return (
    <Grid item marginTop={3}>
      <Box sx={{
        width: "100%",
        textAlign: "center",
        padding: 1,
        boxSizing: "border-box",
      }}>
        <Button sx={{
          width: "100%"
        }} 
        variant="outlined"
        onClick={() => {
          navigate(`/proficiencies/${Proficiency.index!}`)
          scrollUp()
        }}
        >
          { Proficiency.name }
        </Button>
      </Box>
    </Grid>
)
}