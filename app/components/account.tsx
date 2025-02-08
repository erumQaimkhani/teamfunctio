"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Filter: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 overflow-auto">
      <div className="container mx-auto flex flex-col lg:flex-row gap-16 p-8">
        {/* Login Section */}
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-6">Log In</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Username or email address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center mb-4">
              <Input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Log In
            </Button>
          </form>
          <div className="mt-4 text-center">
            <a href="/reset-password" className="text-sm text-blue-500 hover:underline">
              Lost Your Password?
            </a>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-6">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="register-email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <Input
                type="email"
                id="register-email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="/privacy-policy" className="text-blue-500 font-semibold hover:underline">
                privacy policy
              </a>
              .
            </p>
            <Button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg mt-6 hover:bg-green-600 transition duration-300"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
