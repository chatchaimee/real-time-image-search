import axios from "axios";

const initialState = {
  imageLists: [],
  isLoadImageListError: false,
  isImageListLoading: true,
  imageDetail: [],
  isLoadImageDetailError: false,
  isIamgeDetailLoading: true
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_IMAGE_LIST_PENDING":
      return {
        ...state,
        isLoadImageListError: false,
        isImageListLoading: true
      };
    case "GET_IMAGE_LIST_FULFILLED":
      return {
        ...state,
        isImageListLoading: false,
        imageLists: action.payload.data
      };
    case "GET_IMAGE_LIST_REJECTED":
      return {
        ...state,
        isLoadImageListError: true
      };
    case "GET_IMAGE_DETAIL_PENDING":
      return {
        ...state,
        isLoadImageDetailError: false,
        isIamgeDetailLoading: true
      };
    case "GET_IMAGE_DETAIL_FULFILLED":
      return {
        ...state,
        isIamgeDetailLoading: false,
        imageDetail: action.payload.data
      };
    case "GET_IMAGE_DETAIL_REJECTED":
      return {
        ...state,
        isLoadImageDetailError: true
      };
    default:
      return state;
  }
};

// Action creator
export const getImageList = () => {
  return {
    type: "GET_IMAGE_LIST",
    payload: axios.get("http://www.mocky.io/v2/5c1c9bc23100006000104100")
  };
};

export const getImageDetail = () => {
  return {
    type: "GET_IMAGE_DETAIL",
    payload: axios.get("http://www.mocky.io/v2/5c1c9c133100001000104101")
  };
};
