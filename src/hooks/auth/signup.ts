import { signup } from "../../api/auth/signup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { Signup } from "../../interfaces/auth";

const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: Signup) => signup(data),
    onSuccess: () => {
      navigate("/login");
    },
  });
};

export default useSignup;