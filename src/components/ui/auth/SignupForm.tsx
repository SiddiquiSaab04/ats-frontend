import React, { useState } from "react";
import GenericForm from "../../reusable/forms/Form";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import type { Field } from "../../../interfaces/form";
import type { Signup } from "../../../interfaces/auth";

interface SignupFormProps {
  onSubmit: (data: Signup) => void;
  isLoading?: boolean;
  errorMessage?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, isLoading, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const fields: Field[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "John Doe",
      required: true,
      leftIcon: (
        <User size={18} className="text-gray-400 group-focus-within:text-indigo-700 transition-colors" />
      ),
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
      leftIcon: (
        <Mail size={18} className="text-gray-400 group-focus-within:text-indigo-700 transition-colors" />
      ),
    },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Enter your password",
      required: true,
      leftIcon: (
        <Lock size={18} className="text-gray-400 group-focus-within:text-indigo-700 transition-colors" />
      ),
      rightIcon: showPassword ? (
        <Eye
          size={18}
          onClick={togglePasswordVisibility}
          className="text-gray-400 group-focus-within:text-indigo-700 transition-colors cursor-pointer"
        />
      ) : (
        <EyeOff
          size={18}
          onClick={togglePasswordVisibility}
          className="text-gray-400 group-focus-within:text-indigo-700 transition-colors cursor-pointer"
        />
      ),
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      placeholder: "Select your role",
      required: true,
      options: [
        { label: "Recruiter", value: "RECRUITER" },
        { label: "Candidate", value: "CANDIDATE" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-md space-y-6">
      {errorMessage && (
        <div className="p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-200">
          {errorMessage}
        </div>
      )}

      <GenericForm
        fields={fields}
        onSubmit={(data) => onSubmit(data as Signup)}
        submitLabel={isLoading ? "Creating account..." : "Sign Up"}
        submitButtonClassName="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:scale-[0.98] shadow-lg shadow-indigo-500/10"
      />
    </div>
  );
};

export default SignupForm;
