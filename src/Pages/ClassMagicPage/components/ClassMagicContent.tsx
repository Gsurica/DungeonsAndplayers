import { Box, Button, Grid, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllMagic, ClassMagicModels } from "../../../services/interfaces/EspecificClassMagicModels"
import { MonterIndexData } from "../../../services/interfaces/MonstersModels";
import { filterFunction } from "../../../shared/functions/FilterGeneric";
import { scrollUp } from "../../ClassesPage/functions/ScrollUp";

interface ClassMagicContentProps {
  dataContent: ClassMagicModels
  classSpellSearch: string 
  dataArray: AllMagic | MonterIndexData | ClassMagicModels
}

export const ClassMagicContent: React.FC<ClassMagicContentProps> = ({ dataContent, classSpellSearch, dataArray }) => {

  const navigate = useNavigate();

  return (
    <>
      <Grid item>
        <Box sx={{
          textAlign: "center",
          padding: 2,
        }}>
          <Typography fontSize={18}>
            Bard's magic quantity: { dataContent?.count }
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{
          textAlign: "center",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}>
          {
            filterFunction(classSpellSearch, dataArray)?.length! > 0 && (
              filterFunction(classSpellSearch, dataArray)!.map(magic => {
                return (
                  <Button variant="contained" sx={{
                    marginBottom: 4
                  }}
                  onClick={() => {
                    navigate(`/spells/${magic.index}`)
                    scrollUp()
                  }}
                  >
                    { magic.name }
                  </Button>
                )
              })
            )
          }
        </Box>
      </Grid>
    </>
  )
}