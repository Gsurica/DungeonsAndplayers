import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { ClassMagicModels } from "../../../services/interfaces/EspecificClassMagicModels"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp";

interface ClassMagicContentProps {
  dataContent: ClassMagicModels
}

export const ClassMagicContent: React.FC<ClassMagicContentProps> = ({ dataContent }) => {

  const navigate = useNavigate();

  return (
    <>
      <Grid item>
        <Box sx={{
          textAlign: "center",
          padding: 2,
        }}>
          <Typography fontSize={18}>
            Bard's magic quantity: { dataContent?.count }
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{
          textAlign: "center",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}>
          {
            dataContent?.results.map(magic => {
              return (
                <Button variant="contained" sx={{
                  marginBottom: 4
                }}
                onClick={() => {
                  navigate(`/spells/${magic.index}`)
                  scrollUp()
                }}
                >
                  { magic.name }
                </Button>
              )
            })
          }
        </Box>
      </Grid>
    </>
  )
}