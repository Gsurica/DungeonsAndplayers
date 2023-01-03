import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/system"

interface EsClassNameTittleTypes {
  rpgClassName: string
}

export const EsClassNameTittle: React.FC<EsClassNameTittleTypes> = ({ rpgClassName }) => {
  return (
      <Box sx={{
        display: "flex",
        marginTop: "30px",
        padding: "5px",
        borderRadius: "10px",
        flexDirection: "column",
        alignItems: "center"
      }} 
      >
      <Button variant="outlined" onClick={() => {}}>
        <Typography variant="h4" component="h1">
          { rpgClassName }
        </Typography>
      </Button>
    </Box>
  )
}