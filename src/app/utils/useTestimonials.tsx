"use client";
import { BASE_URL } from "@/constants/config";
import { useState, useEffect } from "react";

interface Testimonial {
  _id: string;
  name: string;
  testimonial: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BASE_URL}/psyche/testimonials`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        const testimonialsList = data.testimonials;
        // console.log(testimonialsList);

        // Ensure data is an array before setting state
        if (Array.isArray(testimonialsList)) {
          setTestimonials(testimonialsList);
        } else {
          throw new Error("Received data is not an array");
        }
      } catch (err) {
        console.error("Full error:", err);
        setError((err as Error).message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, setTestimonials, loading, error };
};
