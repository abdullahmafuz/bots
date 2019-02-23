import React from 'react';
import './App.css'

const SearchBox = ({searchfild,searchchange}) =>{
    return(
        <input 
        type='search' 
        placeholder='Search Bots'
        onChange={searchchange}
        />
    );
}
export default SearchBox;