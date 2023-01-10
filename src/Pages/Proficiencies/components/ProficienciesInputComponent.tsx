import { Grid, TextField, Box } from '@mui/material'

interface ProficienciesInputComponentTypes {
  proficienciesSearch: string
  onChangeHandler: any
}

export const ProficienciesInputComponent: React.FC<ProficienciesInputComponentTypes> = ({ onChangeHandler, proficienciesSearch }) => {
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
          value={proficienciesSearch}
          onChange={onChangeHandler}
          placeholder={"Search your spell"}
        />
      </Box>
    </Grid>
  )
}