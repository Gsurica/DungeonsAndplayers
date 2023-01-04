import { Grid, Box, Button, TextField, InputAdornment, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { getAllSpell } from "../../services/SpellsServices"
import { useState } from "react"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { MagicInputComponent } from "./components/MagicInputComponent"
import { MagicContent } from "./components/MagicContent"
import { filterFunction } from "../../shared/functions/FilterGeneric"

export const MagicsPage = () => {

  const [spellSearch, setSpellSearch] = useState<string>("")
  const { data, status } = useQuery(["allSpells", 4], () => getAllSpell())

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    return setSpellSearch(event.target.value)
  }

  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>
      <>
        <MagicInputComponent onChangeHandler={onChangeHandler} spellSearch={spellSearch} />
        <Grid item>
          {
            filterFunction(spellSearch, data!)!.map(spell => {
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