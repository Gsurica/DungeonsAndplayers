import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material"
import { ClassMetaData } from "../../../services/interfaces/classesModels"
import { EquipmentImagesRandom, randomEquipmentNumber } from "../../../shared/functions/EquipmentImagesRandom"

interface EsClassEquipmentTypes {
  dataEquipment: ClassMetaData
}

export const EsClassEquipment: React.FC<EsClassEquipmentTypes> = ({ dataEquipment }) => {
  return (
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
              dataEquipment?.starting_equipment.length! > 0 ? (
                dataEquipment?.starting_equipment.map(item => {
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
            <Typography>Choose { dataEquipment?.starting_equipment_options[0].choose } for:</Typography>
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
              dataEquipment?.starting_equipment_options.map(item => {
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
  )
}