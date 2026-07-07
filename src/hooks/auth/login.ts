import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth/login";
import type { Login } from "../../interfaces/auth";
import { useNavigate } from "react-router-dom";

const loginUser = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (data: Login) => login(data),
        onSuccess: (data) => {
            localStorage.setItem("authToken", data.token);
            navigate("/dashboard");
        }
    });
}

export default loginUser;