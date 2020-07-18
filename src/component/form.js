import React from 'react';



function Form  ({updateSearch,submit,search}) {
    return(
        <div className='frm'>
        <div className="container">
           
                <form className='form' onSubmit={submit} >
                
                    <div className="form-group col-md-12  ">
                        
                        <input type="text" class="form-control mt-5 " id="input" value={search} 
                        placeholder="Search Your Superhero" onChange={updateSearch} />
                    </div>
                    <div className='form-group col-md-12'>
                    <button type="submit" class="btn btn-success mt-2  px-5" >Search</button>
                    </div>
                </form>
            </div>    
        </div>
    );
}

export default Form;