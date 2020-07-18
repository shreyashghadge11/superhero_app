import React from 'react';


function Hero({openpopup,item}){
    
    return(
        
        <div className='hero my-5'>
            <div className="card" style={{ width: "18rem"}}>
                            <img className="card-img-top" src={item.image.url} alt="Card cap"/>
                            <div className=" cardbd">
                                <h5 className="card-title py-2 ">{item.name}</h5>
                                
                                <button href="#" className="btn btn-dark my-2" onClick={()=>openpopup(item.id)}>Read More</button>
                            </div>
            </div>
        </div>
    );
}

export default Hero;

// <p className="card-text">{item.id}</p>