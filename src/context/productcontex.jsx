import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isProductLoading: false,
  product: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  console.log(totalPages)
  
  // const API = `https://shop-api-black-nu.vercel.app/api/prodcuts/get-all?page=${page}`;
  const API = `http://localhost:8000/api/prodcuts/get-all?page=${page}`;

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      setTotalPages(res.data.numberOfPages)
      dispatch({ type: "SET_API_DATA", payload: products.data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //Single Product API
  const getProduct = async (url) => {
    dispatch({ type: "SET_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const product = await res.data;
      dispatch({ type: "SET_PRODUCT_DATA", payload: product });
    } catch (error) {
      dispatch({ type: "API_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, [page]);

  return (
    <AppContext.Provider value={{ ...state, getProduct, setPage, page, totalPages }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
