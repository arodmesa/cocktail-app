import './style/SearchBar.css';
//import React from 'react';
function SearchBar({cambiarDatosActuales, textoSearch, cambiarTexto}){
    return(
        <div className="div_search">
            <h2 className="h2_search">Search Your Favorite Cocktail</h2>
            <div className="align_div">
                <input className="input_search" type='text' onChange={cambiarTexto} value={textoSearch}></input>
                <button className="search_button" onClick={cambiarDatosActuales}>Search</button>
            </div>            
        </div>
    );
}
export default SearchBar;