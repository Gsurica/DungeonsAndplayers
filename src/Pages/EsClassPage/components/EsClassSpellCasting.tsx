import { Box, Typography } from "@mui/material"
import { ClassMetaData } from "../../../services/interfaces/classesModels"
import { ClassHabilityName } from "../../ClassesPage/functions/ClassHabilityName"

interface EsClassSpellCastingTypes {
  dataSpells: ClassMetaData
}

export const EsClassSpellCasting: React.FC<EsClassSpellCastingTypes> = ({ dataSpells }) => {
  return (
    <>
      {
        dataSpells?.spellcasting ? (
          <Box sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            marginTop: 5
          }}>
            <Box sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
              <Typography variant="h4">
                SpellCasting!
              </Typography>
              <Typography sx={{
                marginTop: 1,
                padding: 1,
                backgroundColor: "#eab676"
              }} 
                variant="h6"
                letterSpacing={2}
              >
                { ClassHabilityName(dataSpells?.spellcasting.spellcasting_ability.name!) }
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "30px",
              backgroundColor: "#21130d",
              color: "white",
              padding: 1,
              borderRadius: 3
            }}>
              <Typography variant="body1">Level</Typography>
              <Typography variant="body1">{ dataSpells?.spellcasting.level }</Typography>
            </Box>
            {
              dataSpells?.spellcasting.info.map(info => (
                <Box sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: 1,
                  justifyContent: "space-around",
                  alignItems: "center",
                  textAling: "center",
                  maxWidth: "300px",
                  marginTop: 1
                }}>
                  <Box sx={{
                    backgroundColor: "#063970",
                    padding: 1,
                    color: "white",
                    width: "100%",
                    textAlign: "center"
                  }}>
                    <Typography>
                      { info.name }
                    </Typography>
                  </Box>
                  <Box sx={{
                    display: "flex",
                    textAlign: "center",
                    marginTop: 1,
                    backgroundColor: "#76b5c5",
                    color: "white",
                    padding: 1
                  }}>
                    <Typography>
                      { info.desc }
                    </Typography>
                  </Box>
                </Box>
              ))
            } 
          </Box>
        ) : null
      }
    </>
  )
}