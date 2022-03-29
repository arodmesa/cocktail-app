import './style/About.css';
//import React from 'react';
function About ({flagDetailsFalse}){
    flagDetailsFalse();
    return (
        <div className='about'>
            <div className='div_org'>
                <h1 className='h1_title'>About Me</h1>
                <p className='texto'>I'm a front end developer and AI engineer, my name is Alex Rodríguez.
                I've knowledge of HTML, CSS, JS and React for Web development as well as Python, TensorFlow and Keras for Machine Learning and Neural Networks. For this project I used this  
                <a className='api_link' href='https://www.thecocktaildb.com/api.php' target='_blank'> API</a>. Thanks to the developers.</p> 
            </div>                       
       </div>
    )
}
export default About;