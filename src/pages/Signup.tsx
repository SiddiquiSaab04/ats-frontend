import React from "react";
import SignupUI from "../components/ui/auth/Signup";
import SignupLogic from "../components/controllers/auth/Signup";

const SignupPage: React.FC = () => {
  return (
    <SignupLogic>
      {({ onSubmit, isLoading, errorMessage }) => (
        <SignupUI
          onSubmit={onSubmit}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      )}
    </SignupLogic>
  );
};

export default SignupPage;
