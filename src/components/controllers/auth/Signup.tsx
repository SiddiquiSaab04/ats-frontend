import React from "react";
import { useSignup } from "../../../hooks/auth/auth";
import type { SignupLogicProps, Signup as SignupCredentials } from "../../../interfaces/auth";

const SignupLogic: React.FC<SignupLogicProps> = ({ children }) => {
  const signupMutation = useSignup();

  const handleSubmit = (data: SignupCredentials) => {
    signupMutation.mutate(data);
  };

  const errorMessage = signupMutation.error
    ? (signupMutation.error as any)?.response?.data?.message ||
      signupMutation.error.message ||
      "An unexpected error occurred during signup."
    : undefined;

  return children({
    onSubmit: handleSubmit,
    isLoading: signupMutation.isPending,
    errorMessage,
  });
};

export default SignupLogic;
