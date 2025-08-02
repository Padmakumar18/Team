import React, { useState } from "react";
import type { FormEvent } from "react";
import "../styles/AuthPage.css";

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Login logic
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Signup logic
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

        <form
          onSubmit={isSignup ? handleSignup : handleLogin}
          className="space-y-5"
        >
          {isSignup && (
            <div className="animate-fade-in">
              <label htmlFor="name" className="block text-sm mb-1 font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="John Doe"
              />
            </div>
          )}

          <div className={isSignup ? "animate-fade-in" : ""}>
            <label htmlFor="email" className="block text-sm mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="you@example.com"
            />
          </div>

          <div className={isSignup ? "animate-fade-in" : ""}>
            <label
              htmlFor="password"
              className="block text-sm mb-1 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="••••••••"
            />
          </div>

          {isSignup && (
            <div className="animate-fade-in">
              <label
                htmlFor="confirmPassword"
                className="block text-sm mb-1 font-medium"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-700 via-violet-600 to-black hover:from-violet-800 hover:to-gray-900 transition duration-300 font-semibold"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

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
