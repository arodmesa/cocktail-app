import {useNavigate} from 'react-router-dom';
//import React from 'react';
function NoMatch({flagDetailsFalse}){
    flagDetailsFalse();
    let navigate=useNavigate();
    const goHome = () => {
        navigate("/", {replace:true});
    };
    return(
        <div className="div_NoMatch">
            <h1 className="h1_title">Oooops!!! Page not found !!!</h1>
            <button className="returnBtn search_button" onClick={goHome}>Back Home</button>
        </div>
    );
}
export default NoMatch;