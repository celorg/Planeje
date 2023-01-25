import ProjectsContainer from '../../project/ProjectsContainer'
import styles from './Projects.module.css'

const url = "http://localhost:3000/projetos";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <h1>Projetos</h1>
      <ProjectsContainer url={url} />
    </div>
  )
}

export default Projects