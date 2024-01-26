import React from "react";
import GridView from '../components/GridView';
import ListView from '../components/ListView';

const ProductList = () => {

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
