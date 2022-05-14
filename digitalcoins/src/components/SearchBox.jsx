import React from 'react';


const SearchBox = ({ onChangeHandler }) => {

    return (
        <>
            <input type="search" onChange={(e) => onChangeHandler(e)} />
        </>
    );
}


export default SearchBox;