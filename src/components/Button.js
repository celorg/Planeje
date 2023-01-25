import styles from './Button.module.css'

import { Link } from 'react-router-dom' 

const Button = ({to,text}) => {
  return (
    <Link to={to} className={styles.btn}>{text}</Link>
  )
}

export default Button