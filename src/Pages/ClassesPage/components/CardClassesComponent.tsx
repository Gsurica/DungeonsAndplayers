import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActions } from '@mui/material'
import { Box } from '@mui/material'
import { ClassImage } from "../functions/ClassImage"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import { scrollUp } from "../functions/ScrollUp"

export interface CardClassesComponentTypes {
  name: string
  url: string
  index: string
}

export const CardClassesComponent: React.FC<CardClassesComponentTypes> = ({ name, url, index }) => {

  const navigate = useNavigate()

  return (
      <Card sx={{
      marginTop: "50px",
      maxWidth: 400
    }}>
      <a>
        <CardMedia 
          sx={{ height: 400 }}
          image={ClassImage(index)}
          title="Barbarian"
        />

        <CardContent>
          <Box sx={{
            width: "100%",
            textAlign: "center"
          }}>
            <Typography variant="h5">{ name }</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Button 
            variant="outlined"
            onClick={() => {
              navigate(`/class/${index}`)
              scrollUp()
            }}
          >
            View
          </Button>
        </CardActions>
      </a>

    </Card>
  )
}