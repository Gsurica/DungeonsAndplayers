import { Grid, TextField, Box } from '@mui/material'

interface MagicInputComponentTypes {
  spellSearch: string
  onChangeHandler: any
}

export const MagicInputComponent: React.FC<MagicInputComponentTypes> = ({ onChangeHandler, spellSearch }) => {
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
          value={spellSearch}
          onChange={onChangeHandler}
          placeholder={"Search your spell"}
        />
      </Box>
    </Grid>
  )
}