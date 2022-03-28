import './style/About.css';
//import React from 'react';
function About ({flagDetailsFalse}){
    flagDetailsFalse();
    return (
        <div className='about'>
            <div className='div_org'>
                <h1 className='h1_title'>About Me</h1>
                <p className='texto'>I'm a front end developer, my name is Alex Rodríguez.
                I made this project for fun, in order to practice my
                skills and not for any other purpose. I used this  
                <a className='api_link' href='https://www.thecocktaildb.com/api.php' target='_blank'> API</a>. Thanks to the developers.</p> 
            </div>                       
       </div>
    )
}
export default About;