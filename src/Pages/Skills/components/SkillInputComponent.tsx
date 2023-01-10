import { Grid, TextField, Box } from '@mui/material'

interface SkillInputComponentTypes {
  skillSearch: string
  onChangeHandler: any
}

export const SkillInputComponent: React.FC<SkillInputComponentTypes> = ({ onChangeHandler, skillSearch }) => {
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
          value={skillSearch}
          onChange={onChangeHandler}
          placeholder={"Search your spell"}
        />
      </Box>
    </Grid>
  )
}