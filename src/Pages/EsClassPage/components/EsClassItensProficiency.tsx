import { Box, Typography } from "@mui/material"
import { ClassMetaData } from "../../../services/interfaces/classesModels"

interface EsClassItensProficiencyTypes {
  dataItems: ClassMetaData
}

export const EsClassItensProficiency: React.FC<EsClassItensProficiencyTypes> = ({ dataItems }) => {
  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      marginTop: 5
    }}>
      <Box sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center"
      }}>
        <Typography variant="h4">
          Itens!
        </Typography>
      </Box>
      <Typography variant="h4" letterSpacing={6}>
        Proficiencies!
      </Typography>
      <Box>
        <Box sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          backgroundColor: "#e28743",
          padding: 1,
          borderRadius: 2,
          marginTop: 2
        }}> 
          { dataItems?.proficiencies.map(item => {
            return (
              <Typography fontStyle="italic" fontWeight="bold"> 
                { item.name } 
              </Typography>
            )
          }) }
        </Box>
      </Box>
    </Box>
  )
}