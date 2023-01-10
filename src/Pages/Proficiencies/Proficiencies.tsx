import { getAllProficiencies } from "../../services/ClassesServices"
import { useQuery } from "react-query"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { useState } from "react"
import { Grid } from "@mui/material"
import { filterFunction } from "../../shared/functions/FilterGeneric"
import { ProficienciesInputComponent } from "./components/ProficienciesInputComponent"
import { ProficienciesContent } from "./components/ProficienciesContent"

export const Proficiencies = () => {

  const { data, status } = useQuery(["getAllProficiencies", 15], () => getAllProficiencies())

  const [proficiencies, setProficienciesSearch] = useState<string>("")

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    return setProficienciesSearch(event.target.value)
  }

  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  console.log(data)

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>
      <>
        <ProficienciesInputComponent onChangeHandler={onChangeHandler} proficienciesSearch={proficiencies} />
        <Grid item>
          {
            filterFunction(proficiencies, data!)!.map(proficiencies => {
              return (
                <ProficienciesContent Proficiency={proficiencies} />
              )
            })
          }
        </Grid>
      </>
    </Grid>
  )
}