import { CardClassesComponent } from './components/CardClassesComponent'
import { useQuery } from 'react-query' 
import { getUserClasses } from '../../services/ClassesServices'
import { ClassData } from '../../services/interfaces/classesModels'
import CircularIndeterminate from '../../shared/components/CircularProgress'

export const ClassesPage = () => {

  const { data, status } = useQuery(["classes", 1], getUserClasses)

  return (
    <>
     { status !== 'loading' ?       
     ( 
        data?.results.map((item: ClassData) => {
          return (
            <CardClassesComponent name={item.name} url={item.url} index={item.index} key={item.name} />
          )
        })  
     ) : <CircularIndeterminate />}
    </>
  )
}