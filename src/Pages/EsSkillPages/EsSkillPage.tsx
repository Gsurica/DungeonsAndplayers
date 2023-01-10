import { getOneSkill } from "../../services/ClassesServices"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { Grid } from "@mui/material"
import { EsSkillTitle } from "./components/EsSkillTitle"
import { EsSkillCore } from "./components/EsSkillCore"

export const EsSkillPage = () => {
  const { skillIndex } = useParams()
  const { data, status } = useQuery(["getOneSkill", 13], () => getOneSkill(skillIndex!))

  console.log(data)
  
  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  return (
    <Grid container justifyContent={"center"} marginTop={1} flexDirection="column" spacing={4}>
      
      <EsSkillTitle item={data!} />
      <EsSkillCore item={data!} />

    </Grid>
  )
}