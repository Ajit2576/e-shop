const ProductReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action?.payload?.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        isProductLoading: true,
      };

    case "SET_PRODUCT_DATA":
      return {
        ...state,
        isProductLoading: false,
        product: action.payload,
      };

    case "API_PRODUCT_ERROR":
      return {
        ...state,
        isProductLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
