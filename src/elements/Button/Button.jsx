import classNames from 'classnames';
import { ButtonTypes } from '../../types/Button';
import styles from './button.module.scss';


// Button
const Button = ({text, classes=ButtonTypes.BLACK , type='button'}) => {
  let typeClass;
  switch (classes){
    case ButtonTypes.BLUE: {
      typeClass = styles.button__blue;
      break;
    }
    default: {
      typeClass = styles.button__black;
    }
  }


  return (
    <button type={type} className={classNames(styles.button, typeClass)}><span className={styles.span}>{text}</span></button>
  );
};

export default Button;