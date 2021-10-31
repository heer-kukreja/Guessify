import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <Link className='cards__item__link' to={props.path} style={{ textDecoration: 'none' }}>
        <li className='cards__item' style={{
            backgroundImage: `url(${props.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
        </div>
        <i class="fas fa-chevron-right" style={{
          color: '#fadea7',
          fontSize: '30px',
          textShadow: '2px 2px 2px #8b7f6a'
        }}></i>
      </li>
          
      </Link>
    </>
  );
}

export default CardItem;