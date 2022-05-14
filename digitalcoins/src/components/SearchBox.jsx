import React from 'react';
import { TextField } from '@mui/material';
import "./SearchBox.scss";


const SearchBox = ({ onChangeHandler }) => {

    return (
        <>
            <TextField
                id="searchField"
                label="Search Coins"
                variant="outlined"
                color='info'
                onChange={(e) => onChangeHandler(e)}
            />
        </>
    );
}


export default SearchBox;