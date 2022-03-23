import React from "react";

const Card = ({name, twitter, user, id}) => {
    return(
        <div className = 'tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>

            <img alt="robots" src={`https://robohash.org/${id}?size=150x150&set=set4`} />

        <div>
            <h2>{name}</h2>
            <p>{twitter}</p>
            <p>{user}</p>
        </div>
        </div>
    );
}

export default Card;