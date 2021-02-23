// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
//useState
import { useState } from "react";
//In your ProductList, filter your products by comparing your product's name with query using includes.
const ProductList = () => {
  const [query, setQuery] = useState("");
  const productfilter = products.filter((product) => {
    return product.name.includes(query);
  });
  const productList = productfilter.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
