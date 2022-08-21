import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import {
  getProductSuccess,
  getProductStart,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "./productRedux";
import { publicRequest, userRequest } from "../reqMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://pc-pcarts.herokuapp.com/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("product");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure(error));
  }
};

export const deleteProducts = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`product/${id}`)
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};

export const addProducts = async (dispatch, user) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`product`, user);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure(error));
  }
};

export const updateProducts = async (dispatch,product, id) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`product/${id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};