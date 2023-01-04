import { Grid, Box, Button, TextField, InputAdornment, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { useState } from "react"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { MonsterContent } from "./components/MonsterContent"
import { MonsterInputComponent } from "./components/MonsterInputComponent"
import { getAllMonsters } from "../../services/MonstersService"

export const Monsters = () => {

  const [monster, setMonsterSearch] = useState<string>("")
  const { data, status } = useQuery(["allMonsters", 5], () => getAllMonsters())

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    return setMonsterSearch(event.target.value)
  }

  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  function filterFunction (change: string) {
    const dataList = data?.results

    if (dataList)
      return dataList.filter(item => item.name.toLowerCase().includes(change))
  }

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>
      <>
        <MonsterInputComponent onChangeHandler={onChangeHandler} monsterSearch={monster} />
        <Grid item>
          {
            filterFunction(monster)!.map(monster => {
              return (
                <MonsterContent monster={monster} />
              )
            })
          }
        </Grid>
      </>
    </Grid>
  )
}