import { useEffect } from 'react';
import styles from './burger.module.scss';
import './burger.css';

const Burger = () => {
  useEffect(() => {
    const hamb = document.querySelector('#hamb');
    hamb.addEventListener('click', open);
  });
  
  const open = (e) => {
    const popup = document.querySelector('#popup');
    const hamb = document.querySelector('#hamb');
    popup.classList.toggle('open');
    hamb.classList.toggle('open');
  };

  return (
    <>
      <div className="hamb">
        <div className="hamb__field" id="hamb">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="popup" id="popup">
        <div className={styles.menu__link}>
          
        </div>
      </div>
    </>
  );
};

export default Burger;