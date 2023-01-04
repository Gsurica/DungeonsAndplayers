import { useQuery } from 'react-query'
import { Grid, Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { getOneClass } from '../../services/ClassesServices';
import { useParams } from 'react-router-dom';
import { EsClassImage } from '../ClassesPage/functions/ClassImage';
import CircularIndeterminate from '../../shared/components/CircularProgress';
import { EsClassNameTittle } from './components/EsClassNameTittle';
import { EsClassLife } from './components/EsClassLife';
import { EsClassItensProficiency } from './components/EsClassItensProficiency';
import { EsClassSkills } from './components/EsClassSkills';
import { EsClassSpellCasting } from './components/EsClassSpellCasting';
import { EsClassSpellCastingButton } from './components/EsClassSpellCastingButton';
import { EquipmentImagesRandom, randomEquipmentNumber } from '../../shared/functions/EquipmentImagesRandom';

export const EsClassPage = () => {

  const { classIndex } = useParams()

  const { data, status } = useQuery(["espClass", 1], () => getOneClass(classIndex!));
  console.log(data)

  if (status === 'loading') {
    return (
      <CircularIndeterminate />
    )
  }

  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"} flexDirection={"column"}>

      <Grid item xs={12}>
        <EsClassNameTittle rpgClassName={data?.name!} />
      </Grid>

      <Grid item xs={12}>

          <Card>

            <CardMedia 
              sx={{
                height: 600,
                width: 400
              }}
              image={EsClassImage(data?.name.toLocaleLowerCase())}
              title={classIndex}
            />

            <CardContent>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "space-around",
                alignItems: "center"
              }}>
                <EsClassLife lifeNumber={data?.hit_die!} />
                <EsClassItensProficiency dataItems={data!} />
                <EsClassSkills dataSkills={data!} />
                <EsClassSpellCasting dataSpells={data!} />
              </Box>
              <EsClassSpellCastingButton dataSpellCastingButton={data!} />
              <Box sx={{
                width: "100%",
                marginTop: 3
              }}>
                <Card>
                  <CardMedia
                    sx={{
                      height: 600,
                      width: 400
                    }}
                    image={EquipmentImagesRandom(randomEquipmentNumber(4))}
                  />
                  <CardContent>
                    <Box sx={{
                      width: "100%",
                      textAlign: "center"
                    }}>
                      <Typography variant="h6" component="h1">
                        Start Equipment!
                      </Typography>
                    </Box>
                    <Box sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-around"
                    }}>
                      {
                        data?.starting_equipment.length! > 0 ? (
                          data?.starting_equipment.map(item => {
                            return (
                              <Box>
                                <Button sx={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}>
                                  { item.equipment.name }
                                  <Typography>{ item.quantity }</Typography>
                                </Button>
                              </Box>
                            )
                          })
                        ) : (
                          <Box sx={{
                            width: "100%",
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "center",
                            marginTop: 2,
                            padding: 1,
                            backgroundColor: "#e28743",
                          }}>
                            <Typography variant="body1" color="white" fontStyle="italic">No initial equipment for this class!</Typography>
                          </Box>
                        )
                      }
                    </Box>
                    <Box sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 1,
                      flexDirection: "column",
                      alignItems: "center"
                    }}>
                      <Typography variant="h6">Equipment Options!</Typography>
                      <Typography>Choose { data?.starting_equipment_options[0].choose } for:</Typography>
                    </Box>
                    <Box sx={{
                      width: "100%",
                      justifyContent: "space-around",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      marginTop: 3
                    }}>
                      {
                        data?.starting_equipment_options.map(item => {
                          return (
                            <Box sx={{
                              padding: 1,
                            }}>
                              <Typography>{ item.desc }</Typography>
                            </Box>
                          )
                        })
                      }
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </CardContent>

          </Card>

      </Grid>

    </Grid>
  )
}