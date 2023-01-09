import { Typography } from "@mui/material"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getOneFeats } from "../../services/ClassesServices"
import CircularIndeterminate from "../../shared/components/CircularProgress"

export const EsFeaturesPage = () => {

  const { featIndex } = useParams()
  const { data, status } = useQuery(["esFeat", 12], () => getOneFeats(featIndex!))

  console.log(data)

  if (status === 'loading') {
    return (
      <CircularIndeterminate />
    )
  }

  return (
    <Grid container justifyContent={"center"} marginTop={1} flexDirection="column" spacing={4}>
      
    </Grid>
  )
}