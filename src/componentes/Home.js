//import {useEffect} from 'react'
import DrinkCards from "./DrinkCards";
import SearchBar from "./SearchBar";
//import React from 'react';
import './style/Home.css'

function Home({flagDetailsFalse, datos, cambiarDatosActuales, textoSearch, cambiarTexto, handleClick}){
    flagDetailsFalse();
    const cards=[];
    if (datos){
        datos.map((value,index)=>{
            cards.push(
                <DrinkCards key={index} foto={value.strDrinkThumb} name={value.strDrink} glass={value.strGlass} info={value.strAlcoholic} handleClick={handleClick} idDrink={value.idDrink} />
            );
        })
    }    
    return(
        <div className="div_home">
            <SearchBar cambiarDatosActuales={cambiarDatosActuales} textoSearch={textoSearch} cambiarTexto={cambiarTexto}/>
            <h1 className='h1_title'>Cocktails</h1>
            <div className="div_all_cocktails">
                {(datos)?cards:<h1 className="h1_title">Oops! Cocktail not found!</h1>}
            </div>
        </div>
    );
}
export default Home;