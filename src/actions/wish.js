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
} from "./../actionTypes/wish";
import { api_url } from "./../apiConfig";
const axios = require( "axios" );


// action to create a user
// export const createWish = ( data, history ) => {
export const createWish = ( data) => {
    return (dispatch) => {
    dispatch({ type: CREATE_WISH_REQUEST });
    axios
      .post(`${api_url}/precious/wish`, data)
      .then(function (res) {
        console.log("res=>", res.data);
        setTimeout(() => {
          dispatch({
            type: CREATE_WISH_SUCCESS,
            payload: res.data,
          });
          // navigate(`${api_url}/precious/wishes`);
          // navigate('/wishes');
        }, 1000);
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: CREATE_WISH_FAILURE,
            payload: response.data,
          });
          alert(response.data?.message);
        }
      });
  };
}

// action to get all wish
export const getWishes = () => {
    return (dispatch) => {
    dispatch({ type: GET_WISH_REQUEST });
    axios
      .get(`${api_url}/precious/wish`)
      .then(function (res) {
        console.log("res =>", res.data);
        dispatch({
          type: GET_WISH_SUCCESS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: GET_WISH_FAILURE,
            payload: response?.data,
          });
        }
      });
  };
}

// get single wish
export const singleWish = (id) => {
    return (dispatch) => {
    dispatch({ type: GET_WISH_BYID_REQUEST });
    axios
      .get(`${api_url}/precious/wish/${id}`)
      .then(function (res) {
        console.log("res =>", res.data);
        dispatch({
          type: GET_WISH_BYID_SUCCESS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: GET_WISH_BYID_FAILURE,
            payload: response.data,
          });
        }
      });
  };
}

// action to update a wish 
export const updateWish = ( id, data, history ) => {
    return (dispatch) => {
    dispatch({ type: UPDATE_WISH_BYID_REQUEST });
    axios
      .put(`${api_url}/precious/wish/${id}`, data)
      .then(function (res) {
        console.log("res=>", res.data);
        setTimeout(() => {
          dispatch({
            type: UPDATE_WISH_BYID_SUCCESS,
            payload: res.data,
          });
          history.push("/form");
        }, 1000);
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: UPDATE_WISH_BYID_FAILURE,
            payload: response.data,
          });
          alert(response.data?.message);
        }
      });
  };
}

// action to remove a single wish
export const deleteWish = ( id ) => {
    return (dispatch) => {
    dispatch({ type: DELETE_WISH_BYID_REQUEST });
    axios
      .delete(`${api_url}/precious/wish/${id}`)
      .then(function (res) {
        console.log("res =>", res.data);
        dispatch({
          type: DELETE_WISH_BYID_SUCCESS,
          payload: id,
        });
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err", response);
        if (response !== undefined) {
          dispatch({
            type: DELETE_WISH_BYID_FAILURE,
            payload: response.data,
          });
          alert(response.data?.message);
        }
      });
  };
}