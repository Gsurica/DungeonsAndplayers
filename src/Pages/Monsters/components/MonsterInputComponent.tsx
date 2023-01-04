import { Grid, TextField, Box } from '@mui/material'

interface MagicInputComponentTypes {
  monsterSearch: string
  onChangeHandler: any
}

export const MonsterInputComponent: React.FC<MagicInputComponentTypes> = ({ onChangeHandler, monsterSearch }) => {
  return (
    <Grid item marginTop={2}>
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <TextField
          value={monsterSearch}
          onChange={onChangeHandler}
          placeholder={"Search your spell"}
        />
      </Box>
    </Grid>
  )
}