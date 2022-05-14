import React from 'react';
import { TextField } from '@mui/material';
import "./SearchBox.sass";


const SearchBox = ({ onChangeHandler }) => {

    return (
        <>
            <TextField
                id=""
                label="Search Coins"
                variant="outlined"
                color='info'
                onChange={(e) => onChangeHandler(e)}
            />
        </>
    );
}


export default SearchBox;