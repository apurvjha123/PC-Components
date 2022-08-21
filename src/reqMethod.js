import axios from "axios";

const BASE_URL = "http://52.66.142.209:8000/api";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accesstoken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token:TOKEN && `Bearer ${TOKEN}` },
});