import {
  CREATE_WISH_REQUEST,
  CREATE_WISH_SUCCESS,
  CREATE_WISH_FAILURE,
  GET_WISH_REQUEST,
  GET_WISH_SUCCESS,
  GET_WISH_FAILURE,
  GET_WISH_BYID_REQUEST,
  GET_WISH_BYID_SUCCESS,
  GET_WISH_BYID_FAILURE,
  UPDATE_WISH_BYID_REQUEST,
  UPDATE_WISH_BYID_SUCCESS,
  UPDATE_WISH_BYID_FAILURE,
  DELETE_WISH_BYID_REQUEST,
  DELETE_WISH_BYID_SUCCESS,
  DELETE_WISH_BYID_FAILURE,
} from "../actionTypes/wish";
const initialState = {
  loading: false,
  item: "",
  items: [],
  error: "",
};
export function wishes(state = initialState, action) {
  switch (action.type) {
    case CREATE_WISH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_WISH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_WISH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_WISH_REQUEST:
      return {
        ...state,
      };
    case GET_WISH_SUCCESS:
      return {
        ...state,
        items: action.payload?.response,
      };
    case GET_WISH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case GET_WISH_BYID_REQUEST:
      return {
        ...state,
      };
    case GET_WISH_BYID_SUCCESS:
      return {
        ...state,
        item: action.payload?.response,
      };
    case GET_WISH_BYID_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_WISH_BYID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_WISH_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_WISH_BYID_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case DELETE_WISH_BYID_REQUEST:
      return {
        ...state,
        items: state.items.map((res) =>
          res._id === action.payload ? { ...res, loading: true } : res
        ),
        loading: true,
      };
    case DELETE_WISH_BYID_SUCCESS:
      return {
        ...state,
        items: state.items.filter((res) => res._id !== action.payload),
        loading: false,
      };
    case DELETE_WISH_BYID_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}