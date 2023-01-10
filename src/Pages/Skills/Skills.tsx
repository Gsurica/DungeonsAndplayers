import { Grid } from "@mui/material"
import { useQuery } from "react-query"
import { useState } from "react"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { filterFunction } from "../../shared/functions/FilterGeneric"
import { SkillInputComponent } from "./components/SkillInputComponent"
import { getAllskills } from "../../services/ClassesServices"
import { SkillContent } from "./components/SkillContent"

export const Skills = () => {

  const [skill, setskillSearch] = useState<string>("")
  const { data, status } = useQuery(["allskills", 5], () => getAllskills())

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    return setskillSearch(event.target.value)
  }

  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>
      <>
        <SkillInputComponent onChangeHandler={onChangeHandler} skillSearch={skill} />
        <Grid item>
          {
            filterFunction(skill, data!)!.map(skill => {
              return (
                <SkillContent Skill={skill} />
              )
            })
          }
        </Grid>
      </>
    </Grid>
  )
}