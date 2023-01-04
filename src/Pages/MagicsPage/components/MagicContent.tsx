import { Box, Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ClassIndexMetaData } from "../../../services/interfaces/EspecificClassMagicModels"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"

interface MagicContentTypes {
  spell: ClassIndexMetaData
}

export const MagicContent: React.FC<MagicContentTypes> = ({ spell }) => {
  
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
          navigate(`/spells/${spell.index!}`)
          scrollUp()
        }}
        >
          { spell.name }
        </Button>
      </Box>
    </Grid>
)
}