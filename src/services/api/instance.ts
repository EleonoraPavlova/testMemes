import axios from "axios";

export const instance = axios.create({
  baseURL: "https://67fce9a61f8b41c816881049.mockapi.io/api/mems",
  withCredentials: false,
});
