import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { getOneSpell } from "../../services/SpellsServices"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { Grid } from "@mui/material"
import { ClassMagicComponent } from "./components/ClassMagicComponent"
import { ClassMagicComponentsPart } from "./components/ClassMagicComponentsPart"
import { ClassMagicComponentsMaterials } from "./components/ClassMagicComponentMaterials"
import { ClassMagicComponentClasses } from "./components/ClassMagicComponentClasses"
import { ClassMagicComponentDescription } from "./components/ClassMagicComponentDescription"
import { ClassMagicComponentHigherLevels } from "./components/ClassMagicComponentHigherLevels"
import { ClassMagicComponentSchoolMagic } from "./components/ClassMagicComponentSchoolMagic"


export const EsMagicPage = () => {
  
  const { spellIndex } = useParams()

  const { data, status } = useQuery(["spells", 3], () => getOneSpell(spellIndex!))

  console.log(data)

  if (status === 'loading')
    return <CircularIndeterminate />

  return (
    <Grid container justifyContent={"center"} marginTop={1} flexDirection="column" spacing={4}>

      <ClassMagicComponent dataType={data!} />

      <ClassMagicComponentsPart dataType={data!} />

      <ClassMagicComponentsMaterials dataType={data!} />

      <ClassMagicComponentClasses dataType={data!} />

      <ClassMagicComponentDescription dataType={data!} />

      <ClassMagicComponentHigherLevels dataType={data!} />

      <ClassMagicComponentSchoolMagic dataType={data!} />

    </Grid>
  )
}