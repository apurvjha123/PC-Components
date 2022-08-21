import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupFailure,
  signupStart,
  signupSuccess,
} from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://pc-pcarts.herokuapp.com/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const signup = async (dispatch, user) => {
  dispatch(signupStart());
  try {
    const res = await axios.post(
      "https://pc-pcarts.herokuapp.com/api/auth/register",
      user
    );
    dispatch(signupSuccess(res.data));
  } catch (error) {
    dispatch(signupFailure(error));
  }
};
