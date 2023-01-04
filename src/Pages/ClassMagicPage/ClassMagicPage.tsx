import { Box, Button, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { getClassMagic } from "../../services/ClassesServices"
import { useNavigate } from 'react-router-dom'
import { scrollUp } from "../ClassesPage/functions/ScrollUp"
import { ClassMagicTitle } from "./components/ClassMagicTitle"
import { ClassMagicContent } from "./components/ClassMagicContent"

export const ClassMagicPage = () => {
  
  const { classIndex } = useParams()
  const { data } = useQuery(["classSpells", 1], () => getClassMagic(classIndex!))
  const navigate = useNavigate()

  return (
    <Grid container justifyContent={"center"} marginTop={1} flexDirection="column" spacing={4}>
      <ClassMagicTitle classIndex={classIndex!} />
      <ClassMagicContent dataContent={data!} />
    </Grid>
  )
}