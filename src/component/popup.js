import React from 'react';


function Popup({hero,closepopup,power,appear,image}){
    return(
        <div className='popup'>
            <div className='headlogo'>
                <h1>{hero.name}</h1>
            </div>
            <div className='content'>
                <div className='img'>
                    
                    
                    <img src={image.url} alt='Superhero'></img>
                    
                </div>
                <div className='credit'>
                    
                    <ul>
                        <li>Gender : <p>{appear.gender}</p></li>
                        <li>Height : <p>{appear.height} </p></li>
                        <li>Weight : <p>{appear.weight}</p></li>
                        <li>Race : <p>{appear.race}</p></li>
                        <li>Durability : <p>{power.durability}</p></li>
                    </ul>   
                </div>
                <div className='credit'>
                    
                    <ul>
                        <li>Strength : <p>{power.strength}</p></li>
                        <li>Intelligence : <p>{power.intelligence}</p></li>
                        <li>Power : <p>{power.power}</p></li>
                        <li>Speed : <p>{power.speed}</p></li>
                        <li>Combat : <p>{power.combat}</p></li>
                        
                    </ul>   
                </div>
            </div>
            <button onClick={()=>closepopup()}>Close</button>
        </div>
    );
}

export default Popup;
//<h2>Appearance</h2>//<h2>Powerstats</h2>
/*
            */