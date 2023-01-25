import styles from './Home.module.css'

import Button from '../../components/Button'

import saving from '../../img/saving.png'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Seja bem vindo ao <span>Planeje</span></h1>
      <p>Aqui o seu futuro é planejado</p>
      <Button to="/novoprojeto" text="Crie o seu projeto"/>
      <img src={saving} alt="Planeje" title="Costs e saving ideas from companies"/>
    </div>
  )
}

export default Home