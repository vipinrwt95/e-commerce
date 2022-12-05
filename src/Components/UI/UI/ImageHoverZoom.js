import classes from './imagehover.module.css';
import React from 'react';

const ImageHoverZoom=(props)=>
{

return (<div className={classes['img-wrapper']}>
    <img src={props.source} classname={classes['hover-zoom']}alt=" " />
    </div>
 );
}

export default ImageHoverZoom;