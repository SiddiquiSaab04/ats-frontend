import React from "react";
import LoginUI from "../components/ui/auth/Login";
import LoginLogic from "../components/controllers/auth/Login";

export const LoginPage: React.FC = () => {
    return (
        <LoginLogic>
            {({onSubmit, isLoading, errorMessage}) => (
                <LoginUI onSubmit={onSubmit}
                    isLoading={isLoading}
                    errorMessage={errorMessage}/>
            )}
        </LoginLogic>
    );
};

export default LoginPage;
