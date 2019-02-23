import React from 'react';



const Card = ({name,email,id}) =>{
    return(

        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-4 '>
            <img alt='botphoto' src={`https://robohash.org/${id}?150x150`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}
export default Card;