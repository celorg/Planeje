import styles from './ProjectCard.module.css'

import { Link } from 'react-router-dom'

const ProjectCard = ({titulo,investimento,saldo,categoria,objetivo,id,httpConfig}) => {

  const handleRemove= (id) =>{
    httpConfig(id,"DELETE");
  }

  return (
    <div className={styles.projectcard}>
        <h4>{titulo}</h4>
        <p><span>Investimento:</span> R${investimento} </p>
        {saldo && <p><span>Saldo:</span> R$:{saldo} </p>}
        <p><span>Categoria:</span> <span className={styles.categoria}></span> {categoria}</p>
        <p><span>Detalhes:</span> {objetivo}</p>
        <div className={styles.divbtn}>
          <button onClick={() => handleRemove(id)}>Apagar</button>
          <Link to={`/projetos/${id}`} >Entrar</Link> 
        </div>
    </div>
  )
}

export default ProjectCard