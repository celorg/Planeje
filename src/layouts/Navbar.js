import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'
import moeda from "../img/coins.png"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink><img src={moeda} alt='Planeje' title='Ir para Home' className={styles.logo}/></NavLink>
        <ul className={styles.list_links}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive) ? styles.ativo : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/projetos" className={({isActive}) => (isActive) ? styles.ativo : ''}>Projetos</NavLink>
            </li>
            <li>
                <NavLink to="/sobre" className={({isActive}) => (isActive) ? styles.ativo : ''}>Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar