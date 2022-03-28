import './style/DrinkCards.css';
//import React from 'react';
function DrinkCards({foto, name, glass, info, idDrink, handleClick}){
    return(
        <div className='div_card'>
            <img className='img_card' src={`${foto}/preview`} alt='cocktail'></img>
            <h1 className='h1_card'>{name}</h1>
            <h3 className='h3_card'>{glass}</h3>
            <p className='p_card'>{info}</p>
            <button className='details_button' type='button' onClick={()=>handleClick(idDrink)}>More Info</button> 
        </div>
    );
}
export default DrinkCards;