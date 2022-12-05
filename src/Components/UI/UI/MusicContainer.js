import { Card, Container} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./style.module.css";
import ImageHoverZoom from './ImageHoverZoom';
import Addcartbutton from '../../Cart/Addcartbutton';
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
 ]

function MusicContainer()
{
 console.log(productsArr);

      
return(
<section>
 <h2 className={classes['title-images']}><b>MUSIC</b></h2>
<Container>
 <h4 className={classes['title-images']}>Album 1</h4>
  <ImageHoverZoom source='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' />
  <ul>{productsArr[0].price}<Addcartbutton /></ul>
</Container> 
<Container>
<h4 className={classes['title-images']}>Album 2</h4>
<ImageHoverZoom source='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' />
</Container>
<Container>
<h4 className={classes['title-images']}>Album 3</h4>
      <ImageHoverZoom source='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' />
</Container>
<Container>
<h4 className={classes['title-images']}>Album 4</h4>
      <ImageHoverZoom source='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' />
</Container>
</section>
)
}
export default MusicContainer;