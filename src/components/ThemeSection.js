import React from 'react';
import CardItem  from './CardItem';
import './ThemeSection.css';
import Header from '../components/Header';

function ThemeSection() {
  return (
    <div className='theme-container'>
      <Header />
      <div className='cards__container'>
         <div className='card-items'>
            <CardItem
                    src='./images/wilda.jpg'
                    text='Jungle Book'
                    path='/game-wild'
                  />
            <CardItem
                    src='./images/farm.jpg'
                    text="McDonald's Farm"
                    path='/game-farm'
                  />  
            <CardItem
                    src='./images/food.png'
                    text='Food For Thought'
                    path='/game-food'
                  />
            <CardItem
                    src='./images/travel.jpg'
                    text='Cities of the World'
                    path='/game-city'
                  />
            <CardItem
                    src='./images/scientific.jpg'
                    text='Backyard Science'
                    path='/game-science'
                  />
            <CardItem
                    src='./images/g.png'
                    text='General Knowledge'
                    path='/game-gk'
                  />
         
         </div>
      </div>
    </div>
  );
}

export default ThemeSection;