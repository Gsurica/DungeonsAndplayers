import { Grid } from "@mui/material"
import { useState } from "react"
import { useQuery } from "react-query"
import { getAllFeats } from "../../services/ClassesServices"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import { filterFunction } from "../../shared/functions/FilterGeneric"
import { FeaturesContent } from "./components/FeaturesContent"
import { FeatureInputComponent } from "./components/FeaturesInputComponent"

export const Features = () => {

  const [featsSearch, setFeatsSearch] = useState<string>("")
  const { data, status } = useQuery(["allFeats", 9], () => getAllFeats())

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    return setFeatsSearch(event.target.value)
  }

  if (status === 'loading') {
    return <CircularIndeterminate />
  }

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>
      <>
        <FeatureInputComponent onChangeHandler={onChangeHandler} featSearch={featsSearch} />
        <Grid item>
          {
            filterFunction(featsSearch, data!)!.map(feature => {
              return (
                <FeaturesContent features={feature} />
              )
            })
          }
        </Grid>
      </>
    </Grid>
  )
}