import './header.css';
import styles from './header.module.scss';
import Logo from '../../assets/logo/light-mode-1.png';
import Burger from '../../elements/Burger/Burger';
import Button from '../../elements/Button/Button';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  return(
    <header className='header-section'>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.nav}>
            <li className={styles.nav__item}><a className={styles.nav__link} href="#about">About</a></li>
            <li className={styles.nav__item}><a className={styles.nav__link} href="#work">Work</a></li>
            <li className={styles.nav__item}><a className={styles.nav__link} href="#services">Services</a></li>
            <li className={styles.nav__item}><a className={styles.nav__link} href="#jobs">Jobs</a></li>
          </ul>
        </nav>
        <div className={styles.burger}>
          <Burger></Burger>
        </div>
        <Button text='Contact Us'></Button>
      </div>
    </header>
  )
}

export default Header;