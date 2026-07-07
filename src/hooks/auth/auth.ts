import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth/auth";
import type { Login } from "../../interfaces/auth";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/auth/auth";
import type { Signup } from "../../interfaces/auth";

const loginUser = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (data: Login) => login(data),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        }
    });
}

const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: Signup) => signup(data),
    onSuccess: () => {
      navigate("/login");
    },
  });
};

export  { useSignup, loginUser }