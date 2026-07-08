import { useMutation, useQuery } from "@tanstack/react-query";
import { login, signup, getCurrentUser } from "../../api/auth/auth";
import type { Login, UserProfile } from "../../interfaces/auth";
import { useNavigate } from "react-router-dom";
import type { Signup } from "../../interfaces/auth";

const loginUser = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (data: Login) => login(data),
        onSuccess: (data: any) => {
            const token = data?.token;
            const name = data?.name;
            const role = data?.role ;
            localStorage.setItem("token", token);
            localStorage.setItem("name", name);
            localStorage.setItem("role", role);
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

const useCurrentUser = () => {
  return useQuery<UserProfile>({
    queryKey: ["currentUser"],
    queryFn: () => getCurrentUser(),
    enabled: !!localStorage.getItem("token"),
  });
};

export  { useSignup, loginUser, useCurrentUser }