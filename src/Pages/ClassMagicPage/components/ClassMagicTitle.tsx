import { Button, Grid, Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"

interface ClassMagicTitleProps {
  classIndex: string
}

export const ClassMagicTitle: React.FC<ClassMagicTitleProps> = ({ classIndex }) => {

  const navigate = useNavigate()

  return (
    <>
      <Grid item xs={12}>
        <Button variant="outlined" sx={{
          width: "100%"
        }}
          onClick={() => {
            navigate(`/class/${classIndex}`)
            scrollUp()
          }}
        >
          { classIndex?.toUpperCase() }
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{
          textAlign: "center",
          padding: 2,
          backgroundColor: "#abdbe3",
          borderRadius: 5
        }}>
          <Typography fontSize={20} fontStyle={"italic"}>
            The bard's magic list!
          </Typography>
        </Box>
      </Grid>
    </>
  )
}