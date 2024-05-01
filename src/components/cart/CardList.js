import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import SortDropdown from "./SortDropdown";
import PriceSortDropdown from "./PriceSort";
import result from '../files/data.json'
import Shop from "../Shop";
import { Typography } from "@mui/material";
import '../style.css'


const CardList = () => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    setProducts(result)
  },[])

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPriceSort, setSelectedPriceSort] = useState("default");

  const handleSearch = (searchText) => {
    const filteredByCategory =
      selectedCategory === "All Categories"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const filtered = filteredByCategory.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (category) => {
    setSelectedCategory(category);
    if (category === "All Categories") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handlePriceSort = (option) => {
    setSelectedPriceSort(option);
    let sortedProducts = [...filteredProducts];

    if (option === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    // Initialize filteredProducts with all products during the initial render
    setFilteredProducts(products);
  }, [products]);
  return (
    <div className="p-3">
      <Typography variant='h4' className="text-blue-900 text-center">
          EXPLORE OUR AFFORDABLE PRODUCTS...
      </Typography>
      <Typography variant='h6' className="text-slate-200 text-center offer">
          Summer special offers on juices and fruits...20%OFF
      </Typography>
      <div className="utility-container">
        <SearchBar handleSearch={handleSearch} />
        <SortDropdown handleSort={handleSort} />
        <PriceSortDropdown handlePriceSort={handlePriceSort} />        
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredProducts.map((product) => (
          <Shop product={product}/>
        ))}
      </div>
    </div>
  );
};

export default CardList;
