import { Grid, TextField, Box } from '@mui/material'

interface MagicInputComponentTypes {
  classEspellSearch: string
  onChangeHandler: any
  classIndex: string
}

export const ClassMagicPageInput: React.FC<MagicInputComponentTypes> = ({ onChangeHandler, classEspellSearch, classIndex }) => {
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
          value={classEspellSearch}
          onChange={onChangeHandler}
          placeholder={`Search your ${classIndex} spell`}
        />
      </Box>
    </Grid>
  )
}