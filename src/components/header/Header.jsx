import styles from './header.module.scss';
import Logo from '../../assets/logo/light-mode-1.png';
import Burger from '../../elements/Burger/Burger';

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.nav}>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
        </nav>
        <div className={styles.burger}>
          <Burger></Burger>
        </div>
      </div>
    </header>
  )
}

export default Header;