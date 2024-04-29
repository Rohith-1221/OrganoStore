import React from "react";

import MenuItem from '@mui/material/MenuItem';
import {Select,InputLabel,Box,FormControl} from '@mui/material';

const SortDropdown = ({ handleSort }) => {
  const options = [
    "All Categories",
    "Fruits",
    "Vegetables",
    "Dairy Products",
    "Rice",
    "Juice"
  ];

  return (
  <>
  <Box sx={{minWidth:200}} >
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select onChange={(e) => handleSort(e.target.value)} className="bg-gray-200" label="Category">
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>

  </>
  );
};

export default SortDropdown;
