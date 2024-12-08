"use client";
import { BASE_URL } from "@/constants/config";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    testimonial: "",
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
    if (!formData.name || !formData.testimonial) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true);

    try {
      console.log("Sending testimonial uploading request with data:", formData);

      const response = await fetch(`${BASE_URL}/psyche/testimonials`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        // console.error("API Error:", errorData);
        toast.error(errorData.message || "Uploading failed.");
        return;
      }

      const data = await response.json();
      console.log("Uploading successful, API response:", data);

      // Dispatch the user email to Redux store
      //   dispatch(signIn(formData.email));

      // Clear form data and redirect to the admin dashboard
      setFormData({ name: "", testimonial: "" });
      toast.success("Testimonial uploaded successfully!");
    } catch (error) {
      console.error("Error during uploading testimonial:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-fit  w-full flex items-center justify-center">
      <div className="w-full md:max-w-md p-6 bg-indigo-100 shadow-lg rounded-xl">
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-xl bg-indigo-50 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="testimonial"
              className="block text-sm font-medium text-gray-700"
            >
              Testimonial
            </label>
            <input
              type="text"
              name="testimonial"
              id="testimonials"
              placeholder="Write your feedbacks/testimonials here.."
              value={formData.testimonial}
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
            {isLoading ? "Uploading..." : "Upload Testimonial"}
          </button>
        </form>
      </div>
    </div>
  );
}
