import styles from './ProjectsContainer.module.css';

//hooks
import {useFetch} from '../hooks/useFetch.js'

//Components
import ProjectCard from './ProjectCard';

const ProjectsContainer = ({url}) => {


    const {data:projetos,httpConfig} = useFetch(url);

  return (
    <div className={styles.projectscontainer}>
        {projetos && projetos.map((projeto) => (
            <ProjectCard 
                titulo={projeto.titulo}
                investimento={projeto.investimento}
                saldo={projeto.saldo}
                categoria={projeto.categoria}
                objetivo={projeto.objetivo}
                key={projeto.id}
                id={projeto.id}
                httpConfig={httpConfig}
            />
        ))}
    </div>
  )
}

export default ProjectsContainer