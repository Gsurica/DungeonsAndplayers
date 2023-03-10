import { useQuery } from 'react-query'
import { Grid, Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { getClassLevels, getOneClass } from '../../services/ClassesServices';
import { useParams } from 'react-router-dom';
import { EsClassImage } from '../ClassesPage/functions/ClassImage';
import CircularIndeterminate from '../../shared/components/CircularProgress';
import { EsClassNameTittle } from './components/EsClassNameTittle';
import { EsClassLife } from './components/EsClassLife';
import { EsClassItensProficiency } from './components/EsClassItensProficiency';
import { EsClassSkills } from './components/EsClassSkills';
import { EsClassSpellCasting } from './components/EsClassSpellCasting';
import { EsClassSpellCastingButton } from './components/EsClassSpellCastingButton';
import { EsClassEquipment } from './components/EsClassEquipment';
import { EsClassLevels } from './components/EsClassLevels';

export const EsClassPage = () => {

  const { classIndex } = useParams()

  const { data, status } = useQuery(["espClass", 1], () => getOneClass(classIndex!))

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
              <EsClassEquipment dataEquipment={data!} />
              <EsClassLevels />
            </CardContent>

          </Card>

      </Grid>

    </Grid>
  )
}