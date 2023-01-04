import { Grid, Box, Button, TextField, InputAdornment, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { getAllSpell } from "../../services/SpellsServices"
import { useNavigate } from "react-router-dom"
import { scrollUp } from "../ClassesPage/functions/ScrollUp"
import { FormEvent, useState } from "react"
import CircularIndeterminate from "../../shared/components/CircularProgress"

export const MagicsPage = () => {

  const [spellSearch, setSpellSearch] = useState<string>("")
  const { data, status } = useQuery(["allSpells", 4], () => getAllSpell())

  const navigate = useNavigate()

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    setSpellSearch(event.target.value)
  }

  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>
      <>
        <Grid item marginTop={2}>
          <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <TextField
              value={spellSearch}
              onChange={onChangeHandler}
              placeholder={"Search your spell"}
            />
          </Box>
        </Grid>
        <Grid item>
          {
            data?.results && (
              data?.results.map(spell => {
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
                        navigate(`/spells/${spell.index!}`)
                        scrollUp()
                      }}
                      >
                        { spell.name }
                      </Button>
                    </Box>
                  </Grid>
                )
              })
            )
          }
        </Grid>
      </>
    </Grid>
  )
}