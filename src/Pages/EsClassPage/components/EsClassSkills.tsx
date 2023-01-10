import { Box, Typography, Button } from "@mui/material"
import { ClassMetaData } from "../../../services/interfaces/classesModels"
import { useNavigate } from "react-router-dom"

interface EsClassSkillsTypes {
  dataSkills: ClassMetaData
}

export const EsClassSkills: React.FC<EsClassSkillsTypes> = ({ dataSkills }) => {

  console.log(dataSkills)

  const navigate = useNavigate()

  return (
    <Box>
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
            Skills!
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
            backgroundColor: "#abdbe3",
            padding: 1,
            borderRadius: 2,
            marginTop: 2,
            textAlign: "center"
          }}> 
          {
            dataSkills?.proficiency_choices.map(item => {
              return (
                <Typography>
                  { item.desc }
                </Typography>
              )
            })
          }
          </Box>
          <Box sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            backgroundColor: "#eab676",
            padding: 1,
            borderRadius: 2,
            marginTop: 2,
            textAlign: "center"
          }}> 
          {
            dataSkills?.proficiency_choices.map(item => (
              <>
                {
                  item.from.options.map(prof => {
                    return (
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                      }}>
                        <Button sx={{
                          maxWidth: 200,
                          width: "100%",
                          marginBottom: "10px"
                        }} variant="contained" onClick={() => navigate(`/skills/${prof.item.index}`)}>
                          { prof.item !== undefined && (
                            prof.item.name
                          ) }
                        </Button>
                      </Box>
                    )
                  })
                }
              </>
            ))
          }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}