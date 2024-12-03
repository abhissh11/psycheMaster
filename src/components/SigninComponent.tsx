"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "@/constants/config";

export default function AdminSignin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    apiKey: "",
  });

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

    try {
      const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          apiKey: formData.apiKey,
        }),
      });

      if (response.ok) {
        toast.success("Signed in successfully!");
        setFormData({
          email: "",
          password: "",
          apiKey: "",
        });
      } else {
        const data = await response.json();
        toast.error(data.message || data.error || "Signin failed.");
      }
    } catch (err) {
      console.error("Error during signin:", err);
      toast.error(`An unexpected error occurred.`);
    }
  };

  return (
    <div className="min-h-[70svh] md:my-10 w-full flex items-center justify-center">
      <div className="w-full  md:max-w-md p-6 bg-indigo-100 shadow-lg rounded-xl">
        {/* Toast Container */}
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
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
