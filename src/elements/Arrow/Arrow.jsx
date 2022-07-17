import styles from './arrow.module.scss';


// Arrow
const Arrow = ({src, href}) => {
  
  return (
    <a href={href} className={styles.arrow}><span><img className={styles.img} src={src} alt="img" /></span></a>
  );
};

export default Arrow;