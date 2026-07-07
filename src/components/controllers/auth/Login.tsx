import React from "react";
import loginUser from "../../../hooks/auth/login";
import type { Login as LoginCredentials, LoginLogicProps } from "../../../interfaces/auth";

const LoginLogic: React.FC<LoginLogicProps> = ({ children }) => {
  const loginMutation = loginUser();

  const handleSubmit = (data: LoginCredentials) => {
    loginMutation.mutate(data);
  };

  const errorMessage = loginMutation.error
    ? (loginMutation.error as any)?.response?.data?.message ||
      loginMutation.error.message ||
      "An unexpected error occurred during login."
    : undefined;

  return children({
    onSubmit: handleSubmit,
    isLoading: loginMutation.isPending,
    errorMessage,
  });
};

export default LoginLogic;
