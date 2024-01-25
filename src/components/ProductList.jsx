import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
