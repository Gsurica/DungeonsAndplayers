import { Box, Typography } from '@mui/material'

interface EsClassLifeTypes {
  lifeNumber: number
}

export const EsClassLife: React.FC<EsClassLifeTypes> = ({ lifeNumber }) => {
  return (
    <Box sx={{
      width: "100%",
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#2596be"
    }}>
      <Typography variant="h4" letterSpacing={5} color="white">
        Life
      </Typography>
      <Box sx={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "black",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Typography color="white" variant="h4">
          { lifeNumber }
        </Typography>
      </Box>
    </Box>
  )
}