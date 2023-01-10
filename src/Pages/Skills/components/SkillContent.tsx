import { Box, Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { scrollUp } from "../../ClassesPage/functions/ScrollUp"
import { MonsterMetaData } from "../../../services/interfaces/MonstersModels"
import { SkillMetaData, SkillsModels } from "../../../services/interfaces/SkillsModels"

interface SkillContent {
  Skill: SkillMetaData
}

export const SkillContent: React.FC<SkillContent> = ({ Skill }) => {
  
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
          navigate(`/skills/${Skill.index!}`)
          scrollUp()
        }}
        >
          { Skill.name }
        </Button>
      </Box>
    </Grid>
)
}