import React from "react";
import Card from './Card';

const CardLIst = ({robots}) =>{

    const cardComponent = robots.map((user, i) =>{
        return (
            
            <Card key={i}
        id ={robots[i].id} 
        name={robots[i].name} 
        twitter={robots[i].twitter}
         user={robots[i].username}
         
         />
        )
    })
    return(
        <div> 
       
     {cardComponent}
  </div>
 
    );
}

export default CardLIst;