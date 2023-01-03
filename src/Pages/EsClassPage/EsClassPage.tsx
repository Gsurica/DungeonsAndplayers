import { useQuery } from 'react-query'
import { Grid, Box, Card, CardContent, CardMedia } from '@mui/material'
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
            </CardContent>

          </Card>

      </Grid>

    </Grid>
  )
}