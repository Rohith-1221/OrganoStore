import React, { useState } from "react";
import {TextField,Box,FormControl} from '@mui/material';

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text.toLowerCase());
    handleSearch(text);
  };

  return (
    <>
      <Box  sx={{width:'40%'}}>        
        <FormControl fullWidth>
        <TextField type='text' label="SEARCH PRODUCTS" className='bg-gray-200 rounded' variant="filled" value={searchText} onChange={handleChange}/>
        </FormControl>
      </Box>
    </>
  );
};

export default SearchBar;
