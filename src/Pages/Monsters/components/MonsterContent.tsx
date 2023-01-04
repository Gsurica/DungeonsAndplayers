import { Box, Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"
import { MonsterMetaData } from "../../../services/interfaces/MonstersModels"

interface MagicContentTypes {
  monster: MonsterMetaData
}

export const MonsterContent: React.FC<MagicContentTypes> = ({ monster }) => {
  
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
          navigate(`/monsters/${monster.index!}`)
          scrollUp()
        }}
        >
          { monster.name }
        </Button>
      </Box>
    </Grid>
)
}