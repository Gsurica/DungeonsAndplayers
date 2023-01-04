import { Grid, Box, Button, TextField, InputAdornment, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { getAllSpell } from "../../services/SpellsServices"
import { useState } from "react"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { MagicInputComponent } from "./components/MagicInputComponent"
import { MagicContent } from "./components/MagicContent"

export const MagicsPage = () => {

  const [spellSearch, setSpellSearch] = useState<string>("")
  const { data, status } = useQuery(["allSpells", 4], () => getAllSpell())

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    return setSpellSearch(event.target.value)
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
        <MagicInputComponent onChangeHandler={onChangeHandler} spellSearch={spellSearch} />
        <Grid item>
          {
            filterFunction(spellSearch)!.map(spell => {
              return (
                <MagicContent spell={spell} />
              )
            })
          }
        </Grid>
      </>
    </Grid>
  )
}