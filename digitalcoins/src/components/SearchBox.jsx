import React from 'react';
import { TextField } from '@mui/material';


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