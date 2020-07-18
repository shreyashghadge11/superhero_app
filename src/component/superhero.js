import React from 'react';
import Hero from './hero';




function Superhero({heroes,openpopup})  {
    
        return(
            <div className="su">
                
                <div className='super'>
                    {heroes.map(hero => (
                         <Hero openpopup={openpopup} item={hero}/>       
                    ))}
                </div>
                
               
            </div>
        )
    }

//<Hero openpopup={openpopup} hero={hero}/>


export default Superhero;