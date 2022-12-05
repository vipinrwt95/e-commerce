import Card from 'react-bootstrap/Card';
import classes from './style.module.css';

function CardTitle() {
  return (
    <header>
    <h1 className={classes['header-h1']}>The Generics</h1>
    </header>
  );
}

export default CardTitle;