import AxiosInstance from "../index";
import type { Signup } from "../../interfaces/auth";
import type { Login } from "../../interfaces/auth";

export const signup = async (data: Signup) => {
  const res = await AxiosInstance.post("/auth/signup", data);
  return res.data.user;
};


export const login = async (data: Login) => {
  const res = await AxiosInstance.post("/auth/login", data);
  return res.data.user;
};

export const getCurrentUser = async () => {
  const res = await AxiosInstance.get("/user/me");
  return res.data.user;
};
