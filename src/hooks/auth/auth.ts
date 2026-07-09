import { useMutation, useQuery } from "@tanstack/react-query";
import { login, signup, getCurrentUser } from "../../api/auth/auth";
import type { Login, UserProfile } from "../../interfaces/auth";
import { useNavigate } from "react-router-dom";
import type { Signup } from "../../interfaces/auth";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../features/auth/authSlice";

const loginUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: (data: Login) => login(data),
        onSuccess: (data: any) => {
            const token = data?.token;
            const name = data?.name;
            const role = data?.role;
            localStorage.setItem("token", token);
            localStorage.setItem("name", name);
            localStorage.setItem("role", role);
            
            // Dispatch to Redux store
            dispatch(loginAction({
                user: {
                    id: data?.id || 0,
                    name: name || "",
                    email: data?.email || "",
                    role: role || ""
                },
                token: token
            }));
            
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