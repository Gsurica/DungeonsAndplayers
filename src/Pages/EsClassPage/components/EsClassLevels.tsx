import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getClassLevels } from "../../../services/ClassesServices";
import { Box } from '@mui/material'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { EsClassLevelsEspecificFeatures } from "./EsClassLevelsEspecificFeatures";

export const EsClassLevels = () => {

  const { classIndex } = useParams()

  const { data } = useQuery(["classLevels", 7], () => getClassLevels(classIndex!));
  console.log(data)

  return (
    <Grid item marginTop={4}>
      <Card>
        <CardContent>
          <Box>
            {
              data?.map(item => {
                return (
                  <>
                    <Button variant="outlined" sx={{ marginBottom: 3, marginTop: 3 }}>The { item.class.name } level - { item.level }</Button>
                    <Card sx={{
                      marginTop: 1,
                      marginBottom: 1
                    }} elevation={10}> 
                      <CardContent>
                        <Box sx={{
                          width: "100%"
                        }}>
                          <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: '100%',
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 1
                          }}>
                            <Typography>Ability Score</Typography>
                            <Button variant="outlined">{ item.ability_score_bonuses }</Button>
                          </Box>
                          <EsClassLevelsEspecificFeatures classIndex={classIndex!} item={item} />
                          <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: '100%',
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 1
                          }}>
                            <Typography>Prof bonus</Typography>
                            <Button variant="outlined">{ item.prof_bonus }</Button>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                    <Card sx={{
                      marginTop: 1,
                      marginBottom: 1
                    }} elevation={10}> 
                      <CardContent>
                        <Typography variant="h6" sx={{ marginBottom: 1 }}>The { item.class.name } Features - { item.level }</Typography>
                        <Box sx={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}>
                          {
                            item.features.length > 0 ? (item.features.map(feat => {
                              return (
                                <Box sx={{
                                  width: "100%",
                                  marginBottom: 1
                                }}>
                                  <Button variant="outlined" sx={{ width: "100%" }}>{ feat.name }</Button>
                                </Box>
                              )
                            })) : (
                              <Box sx={{
                                width: "100%",
                                marginBottom: 1
                              }}>
                                <Button variant="outlined" sx={{ width: "100%" }}>This level doesnt contain any feature</Button>
                              </Box>
                            )
                          }
                        </Box>
                      </CardContent>
                    </Card>
                  </>
                )
              })
            }
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}