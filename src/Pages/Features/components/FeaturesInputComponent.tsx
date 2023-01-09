import { Grid, TextField, Box } from '@mui/material'

interface FeatureInputComponentTypes {
  featSearch: string
  onChangeHandler: any
}

export const FeatureInputComponent: React.FC<FeatureInputComponentTypes> = ({ onChangeHandler, featSearch }) => {
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
          value={featSearch}
          onChange={onChangeHandler}
          placeholder={"Search your feat"}
        />
      </Box>
    </Grid>
  )
}