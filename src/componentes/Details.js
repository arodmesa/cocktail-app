import {useParams, useNavigate} from 'react-router-dom';
//import React from 'react';
import './style/Details.css';
function Details({datallesListos, handleClick, foto, name, category, glass, info, ingredients,  instructions}){
    let params= useParams();
    let navigation = useNavigate();
    if (datallesListos===false){
        if (!isNaN(params.drinkId.slice(1))){ // esta linea al estar negando el NaN, si es true el resultado es un numero
            handleClick(params.drinkId.slice(1));
        }
        else{
            navigation('Error');
        }
    }
    const array_li=[];
    ingredients.map((value,index)=>{
        array_li.push(<li key={index} className="li_details">{value}</li>);
    })
    const goHome = () => {
        navigation("/", {replace:true});
    };
    return(
        <div className="div_details">
            <button className="retBtn" onClick={goHome}>Back Home</button>
            <h1 className="h1_title">{name}</h1>
            <div className="org_details">
                <img className="full_img" src={foto} alt='drink picture'></img>
                <div className="org_params">
                    <div className='org_texto'>
                        <h2 className="h2_nombres">Name:    </h2>
                        <h2 className="h2_datos">{name}</h2>
                    </div>
                    <div className='org_texto'>
                        <h2 className="h2_nombres">Category:    </h2>
                        <h2 className="h2_datos">{category}</h2>
                    </div>
                    <div className='org_texto'>
                        <h2 className="h2_nombres">Glass:   </h2>
                        <h2 className="h2_datos">{glass}</h2>
                    </div>
                    <div className='org_texto'>
                        <h2 className="h2_nombres">Info:    </h2>
                        <h2 className="h2_datos">{info}</h2>
                    </div>
                    <div className='org_texto'>
                        <h2 className="h2_nombres">Ingredients: </h2>
                        <ul className="ul_details">
                            {array_li}
                        </ul>
                    </div>
                    <div className='org_texto'>
                        <h2 className="h2_nombres">Instructions:    </h2>
                        <h2 className="h2_datos">{instructions}</h2>
                    </div>              
                </div>
            </div>
        </div>
    );
}
export default Details;