import React from "react";

import MenuItem from '@mui/material/MenuItem';
import {Select,InputLabel,Box,FormControl} from '@mui/material';

const PriceSortDropdown = ({ handlePriceSort }) => {

  


  return (
    <>
    <Box sx={{minWidth:200}} >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select labelId="demo-simple-select-label" className="bg-gray-200 "
            label="Price" onChange={(e) => handlePriceSort(e.target.value)}>    
            <MenuItem value="default">Sort by Price</MenuItem>
            <MenuItem value="lowToHigh">Low to High</MenuItem>
            <MenuItem value="highToLow">High to Low</MenuItem>
          </Select>
          </FormControl>
    </Box>
   </>
  );
};

export default PriceSortDropdown;
