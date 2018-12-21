import axios from "axios";

const initialState = {
  images: [],
  imageDetail: [],
  isError: false,
  isLoading: true
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_IMAGE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true
      };
    case "GET_IMAGE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        images: action.payload.data
      };
    case "GET_IMAGE_REJECTED":
      return {
        ...state,
        isError: true
      };
    case "GET_IMAGE_DETAIL_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true
      };
    case "GET_IMAGE_DETAIL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        imageDetail: action.payload.data
      };
    case "GET_IMAGE_DETAIL_REJECTED":
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

// Action creator
export const getImage = () => {
  return {
    type: "GET_IMAGE",
    payload: axios.get("http://www.mocky.io/v2/5c1c9bc23100006000104100")
  };
};

export const getImageDetail = () => {
  return {
    type: "GET_IMAGE_DETAIL",
    payload: axios.get("http://www.mocky.io/v2/5c1c9c133100001000104101")
  };
};
