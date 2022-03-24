import React from "react";

const Searchbox = ({ searchChange }) =>{
    return(

        <div className="pa2">

        <input className="pa3 ba b--blue bg-lightest-blue" 
        type="search"
         placeholder="search cats" 
         onChange={searchChange}
         />
    
        </div>
    );
}

export default Searchbox;