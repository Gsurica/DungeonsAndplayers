import { getOneMonster } from "../../services/MonstersService"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import CircularIndeterminate from "../../shared/components/CircularProgress"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"

export const EsMonsterPage = () => {

  const { monsterIndex } = useParams()
  const { data, status } = useQuery(["oneMonster", 6], () => getOneMonster(monsterIndex!))

  console.log(data)

  if (status === "loading") {
    return <CircularIndeterminate />
  }

  return (
    <Grid container justifyContent={"center"} flexDirection={"column"} spacing={4}>

      <Grid item>
        <Box sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: 3
        }}>
          <Button sx={{
            width: "100%"
          }} 
            variant="outlined"
          >
            { data?.name }
          </Button>
        </Box>
      </Grid>

      <Grid item>

          <Card>
            <CardMedia 
              image={data?.image ? data?.image : ""}
            />
            <CardContent>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Alignment
                </Button>
                <Typography>
                  { data?.alignment }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Hit Dice
                </Button>
                <Typography>
                  { data?.hit_dice }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Hit Points
                </Button>
                <Typography>
                  { data?.hit_points }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Hit Points Roll
                </Button>
                <Typography>
                  { data?.hit_points_roll }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Swim
                </Button>
                <Typography>
                  { data?.speed.swim }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Walk
                </Button>
                <Typography>
                  { data?.speed.walk }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Senses
                </Button>
                <Typography>
                  { data?.senses.darkvision }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Passive perception
                </Button>
                <Typography>
                  { data?.senses.passive_perception }
                </Typography>
              </Box>
            </CardContent>
          </Card>


          <Card sx={{
            marginTop: 2
          }}>
            <CardContent>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Languages
                </Button>
                <Typography sx={{
                  maxWidth: 300
                }}>
                  { data?.languages }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Size
                </Button>
                <Typography>
                  { data?.size }
                </Typography>
              </Box>
              <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2
              }}>
                <Button variant="outlined">
                  Type
                </Button>
                <Typography>
                  { data?.type }
                </Typography>
              </Box>
              {
                data?.subtype ? (
                  <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2
                  }}>
                    <Button variant="outlined">
                      SubType
                    </Button>
                    <Typography>
                      { data?.subtype }
                    </Typography>
                  </Box>
                ) : (
                  null
                )
              }
            </CardContent>
          </Card>
            
          <Card sx={{
            marginTop: 2
          }}>
            <CardContent>
              <Box sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Typography variant="h4">
                  Habilities  
                </Typography>  
              </Box>  
              <Box>
                <Button sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginTop: 1
              }} variant="outlined">
                  <Typography sx={{ margin: 1 }}>Dexterity</Typography>
                  <Typography>{ data?.dexterity }</Typography>
                </Button>
              </Box>
              <Box>
                <Button sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginTop: 1
              }} variant="outlined">
                  <Typography sx={{ margin: 1 }}>Strength</Typography>
                  <Typography>{ data?.strength }</Typography>
                </Button>
              </Box>
              <Box>
                <Button sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginTop: 1
              }} variant="outlined">
                  <Typography sx={{ margin: 1 }}>Constitution</Typography>
                  <Typography>{ data?.constitution }</Typography>
                </Button>
              </Box>
              <Box>
                <Button sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginTop: 1
              }} variant="outlined">
                  <Typography sx={{ margin: 1 }}>Wisdom</Typography>
                  <Typography>{ data?.wisdom }</Typography>
                </Button>
              </Box>
              <Box>
                <Button sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginTop: 1
              }} variant="outlined">
                  <Typography sx={{ margin: 1 }}>Intelligence</Typography>
                  <Typography>{ data?.intelligence }</Typography>
                </Button>
              </Box>
              <Box>
                <Button sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "column",
                marginTop: 1
              }} variant="outlined">
                  <Typography sx={{ margin: 1 }}>Charisma</Typography>
                  <Typography>{ data?.charisma }</Typography>
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            marginTop: 3
          }}>
            <CardContent>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Typography variant="h4">
                  Immunities
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Button sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 1,
                  width: "100%"
                }} variant="outlined">
                  <Typography>Damage Immunities</Typography>
                  <>{ data?.damage_immunities.length! > 0 ? (
                    data?.damage_immunities.map(immunities => {
                      return (
                        <Typography>{ immunities }</Typography>
                      )
                    })
                  ) : (
                    <Typography color="black" sx={{ marginTop: 1 }}>No Damage immunities</Typography>
                  ) }</>
                </Button>
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Button sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 1,
                  width: "100%"
                }} variant="outlined">
                  <Typography>Conditions Immunities</Typography>
                  <>{ data?.condition_immunities.length! > 0 ? (
                    data?.condition_immunities.map(immunities => {
                      return (
                        <Typography>{ immunities.name }</Typography>
                      )
                    })
                  ) : (
                    <Typography color="black" sx={{ marginTop: 1 }}>No condition immunities</Typography>
                  ) }</>
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            marginTop: 3
          }}>
            <CardContent>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Typography variant="h4">
                  Resistances
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Button sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 1,
                  width: "100%"
                }} variant="outlined">
                  <Typography>Resistances</Typography>
                  <>{ data?.damage_resistances.length! > 0 ? (
                    data?.damage_resistances.map(resistances => {
                      return (
                        <Typography>{ resistances }</Typography>
                      )
                    })
                  ) : (
                    <Typography color="black" sx={{ marginTop: 1 }}>No Damage resistances</Typography>
                  ) }</>
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            marginTop: 3
          }}>
            <CardContent>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Typography variant="h4">
                  Vulnerabilities
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Button sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 1,
                  width: "100%"
                }} variant="outlined">
                  <Typography>Vulnerabilities</Typography>
                  <>{ data?.damage_vulnerabilities.length! > 0 ? (
                    data?.damage_vulnerabilities.map(vulnerabilities => {
                      return (
                        <Typography>{ vulnerabilities }</Typography>
                      )
                    })
                  ) : (
                    <Typography color="black" sx={{ marginTop: 1 }}>No vulnerabilities</Typography>
                  ) }</>
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            marginTop: 3
          }}>
            <CardContent>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Typography variant="h4">
                  Profeciencies
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Button sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 1,
                  width: "100%"
                }} variant="outlined">
                  <Typography sx={{ marginBottom: 2 }}>Proficiency</Typography>
                  <>
                    {
                      data?.proficiencies.map ? (
                        data.proficiencies.map(prof => {
                          return (
                            <Box sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                              padding: 1
                            }}>
                              <Typography>{ prof.proficiency.name }</Typography>
                              <Typography color="black">{ prof.value }</Typography>
                            </Box>
                          )
                        })
                      ) : (
                        <></>
                      )
                    }
                  </>
                </Button>
              </Box>
            </CardContent>
          </Card>

      </Grid>

    </Grid>
  )
}