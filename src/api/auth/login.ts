import AxiosInstance from "../index";
import type { Login } from "../../interfaces/auth";

export const login = async (data: Login) => {
  const res = await AxiosInstance.post("/auth/login", data);
  return res.data.user;
};
