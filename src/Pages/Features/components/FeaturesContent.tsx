import { Box, Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { ClassIndexMetaData } from "../../../services/interfaces/EspecificClassMagicModels"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"

interface FeaturesContentTypes {
  features: ClassIndexMetaData
}

export const FeaturesContent: React.FC<FeaturesContentTypes> = ({ features }) => {
  
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
            navigate(`/feat/${features.index!}`)
            scrollUp()
          }}
          >
            { features.name }
          </Button>
        </Box>
      </Grid>
  )
}