import AxiosInstance from "../index";
import type { Signup } from "../../interfaces/auth";

export const signup = async (data: Signup) => {
  const res = await AxiosInstance.post("/auth/signup", data);
  return res.data.user;
};