import './App.css';
import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import About from './componentes/About.js';
import Home from './componentes/Home.js';
import NavBar from './componentes/NavBar';
import NoMatch from './componentes/NoMatch';
import Details from './componentes/Details';
//import React from 'react';

function App() {
  // states //
  const [datosXdefecto, setDatosXdefecto]=useState([]); //  Datos por defecto de la pag principal
  const [datosActuales, setDatosActuales]=useState([]); //  Datos de la busqueda del usuario
  const [drinkData, SetDrinkData]= useState([]); //  Detalles de la bebida seleccionada
  const [ingredientes, SetIngredientes]=useState([]); //  Ingredientes mostrados en la version detallada de un trago
  const [defecto, setDefecto]=useState(true); //  Este flag indica si se utilizan los datos por defecto o no
  const [datallesListos, SetDetallesListos]=useState(false); // Este flag indica si los detalles de una bebida ya han sido recibidos. Esto es para que si el usuario introduce manualmente la url la pag funcione
  const [textoSearch, setTextoSearch]=useState('');

  ////////////
  const navigation=useNavigate();

  // func  //
  function cambiarDatosActuales(){
    if (textoSearch!==''){    
      setDefecto(false);
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${textoSearch}`)
      .then(res=>res.json())
      .then(data=>setDatosActuales(data.drinks))
       
    }
  }
  function cambiarTexto(event){
    setTextoSearch(event.target.value);
  }
  function handleClick(idDrink){ ////////////////////////////////////////////////////////////////////////////////////
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    .then(res=>res.json())
    .then(data=>{
      if (data.drinks){
        SetDrinkData(data.drinks[0]);
        let temp_array=[];
        for (let i=1; i<=50; i++){
          if (data.drinks[0][`strIngredient${i}`]){
            temp_array.push(data.drinks[0][`strIngredient${i}`]);
          }
          else{
            break;
          }
        }
        SetIngredientes(temp_array.slice());
        navigation(`drinks/:${idDrink}`);  
        SetDetallesListos(true);
      }      
      else{
        navigation('Error', {replace: true});
      }
    });         
  }
  function flagDetailsFalse(){
    if (datallesListos){
      SetDetallesListos(false);
    }    
  }
  ///////////

  useEffect(()=>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    .then(res=>res.json())
    .then(data=>setDatosXdefecto(data.drinks))
  },[])
  useEffect(()=>{
    if(textoSearch===''){
      setDefecto(true);  
    }
  },[textoSearch])
  
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home flagDetailsFalse={flagDetailsFalse} datos={defecto?datosXdefecto:datosActuales} cambiarDatosActuales={cambiarDatosActuales} textoSearch={textoSearch} cambiarTexto={cambiarTexto} handleClick={handleClick}/>}></Route>
          <Route path='about' element={<About flagDetailsFalse={flagDetailsFalse}/>}></Route> 
          <Route path='drinks/:drinkId' element={<Details datallesListos={datallesListos} handleClick={handleClick} foto={drinkData.strDrinkThumb} name={drinkData.strDrink} category={drinkData.strCategory} glass={drinkData.strGlass} info={drinkData.strAlcoholic} ingredients={ingredientes}  instructions={drinkData.strInstructions} />}></Route>
          <Route path='*' element={<NoMatch flagDetailsFalse={flagDetailsFalse}/>}></Route>
        </Routes>      
    </div>
  );
}

export default App;
