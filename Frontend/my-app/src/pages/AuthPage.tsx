import "../styles/AuthPage.css";

import React, { useState } from "react";
import type { FormEvent } from "react";

import { Eye, EyeOff } from "lucide-react";

import type { LoginFormData, SignupFormData } from "../type";

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [signupForm, setSignupForm] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginForm, setLoginForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm({ ...signupForm, [e.target.id]: e.target.value });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", loginForm);
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", signupForm);
  };

  return (
    <div className="auth-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 bg-dots" />

      <div
        className={`relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isSignup ? "max-h-[800px]" : "max-h-[520px]"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          {isSignup ? "Create Your Account" : "Welcome Back"}
        </h2>

        {isSignup && (
          <form onSubmit={handleSignup} className="space-y-5 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-sm mb-1 font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={signupForm.name}
                onChange={handleSignupChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={signupForm.email}
                onChange={handleSignupChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm mb-1 font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={signupForm.password}
                onChange={handleSignupChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-9 cursor-pointer text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm mb-1 font-medium"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-9 cursor-pointer text-gray-300"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-700 via-violet-600 to-black transition duration-300 font-semibold"
            >
              Sign Up
            </button>
          </form>
        )}

        {!isSignup && (
          <form onSubmit={handleLogin} className="space-y-5 animate-fade-in">
            <div>
              <label htmlFor="email" className="block text-sm mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={loginForm.email}
                onChange={handleLoginChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm mb-1 font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type={showLoginPassword ? "text" : "password"}
                required
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <span
                onClick={() => setShowLoginPassword((prev) => !prev)}
                className="absolute right-3 top-9 cursor-pointer text-gray-300"
              >
                {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-700 via-violet-600 to-black transition duration-300 font-semibold"
            >
              Login
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-300 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="underline text-violet-300 hover:text-violet-100"
            onClick={() => setIsSignup((prev) => !prev)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
