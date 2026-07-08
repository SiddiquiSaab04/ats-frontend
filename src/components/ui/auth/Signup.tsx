import React from "react";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";
import type { Signup as SignupCredentials } from "../../../interfaces/auth";

interface SignupProps {
  onSubmit: (data: SignupCredentials) => void;
  isLoading?: boolean;
  errorMessage?: string;
}

const SignupUI: React.FC<SignupProps> = ({ onSubmit, isLoading, errorMessage }) => {
  return (
    <div className="min-h-dvh flex bg-lavender/30">
      {/* Left side: Premium Image/Visual Container */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-indigo-900 overflow-hidden items-center justify-center">
        {/* Subtle background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-indigo-900/30 to-indigo-900/20 z-10" />
        
        {/* The generated illustration */}
        <img
          src="/login_illustration.png"
          alt="Recruitment Portal Illustration"
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-in-out"
        />

        {/* Decorative glassmorphic overlay card/content */}
        <div className="relative z-20 max-w-md p-8 m-8 bg-indigo-950/60 backdrop-blur-md rounded-2xl border border-indigo-700/10 text-indigo-700 shadow-2xl text-left space-y-4">
          <div className="inline-flex items-center justify-center p-2.5 bg-indigo-600/20 text-indigo-700 rounded-xl border border-indigo-700/20 font-bold text-xs uppercase tracking-wider">
            Applicant Tracking System
          </div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
            Hire the best talent, faster.
          </h2>
          <p className="text-sm text-indigo-100 leading-relaxed">
            Manage candidates, collaborate with hiring managers, track progress, and automate interview scheduling—all in one unified platform.
          </p>
          <div className="pt-2 border-t border-indigo-700 flex items-center justify-between text-xs text-indigo-100">
            <span>ATS Portal v1.0.0</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">
              Create Account
            </h1>
            <p className="text-sm text-indigo-700">
              Sign up to get started with the recruitment platform.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100/80">
            <SignupForm
              onSubmit={onSubmit}
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          </div>

          <div className="text-center text-sm text-indigo-700">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-700 hover:text-indigo-700 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="text-center text-xs text-indigo-700">
            <p>
              By signing up, you agree to our{" "}
              <a href="#" className="underline hover:text-gray-600 transition-colors">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-gray-600 transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUI;
