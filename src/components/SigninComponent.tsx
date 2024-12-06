"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "@/constants/config";
import { useAppDispatch } from "@/lib/hooks";
import { signIn } from "@/app/redux/auth/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminSignin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    apiKey: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear existing toasts
    toast.dismiss();

    // Validate input fields
    if (!formData.email || !formData.password || !formData.apiKey) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true);

    try {
      console.log("Sending sign-in request with data:", formData);

      const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        // console.error("API Error:", errorData);
        toast.error(errorData.message || "Sign-in failed.");
        return;
      }

      const data = await response.json();
      console.log("Sign-in successful, API response:", data);

      // Dispatch the user email to Redux store
      dispatch(signIn(formData.email));

      // Clear form data and redirect to the admin dashboard
      setFormData({ email: "", password: "", apiKey: "" });
      toast.success("Signed in successfully!");

      setTimeout(() => {
        router.push("/admin-dashboard");
      }, 100);
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70svh] md:my-10 w-full flex items-center justify-center">
      <div className="w-full md:max-w-md p-6 bg-indigo-100 shadow-lg rounded-xl">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-xl bg-indigo-50 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-xl bg-indigo-50 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="apiKey"
              className="block text-sm font-medium text-gray-700"
            >
              API Key
            </label>
            <input
              type="text"
              name="apiKey"
              id="apiKey"
              value={formData.apiKey}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-xl bg-indigo-50 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 ${
              isLoading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            } text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <h2 className="text-black py-2">
          Haven&apos;t registered yet?{" "}
          <span className="hover:underline">
            <Link href="/auth/signup">Signup</Link>
          </span>
        </h2>
      </div>
    </div>
  );
}
