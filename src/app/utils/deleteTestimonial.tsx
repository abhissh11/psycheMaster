import { BASE_URL } from "@/constants/config";

export const deleteTestimonial = async (
  testimonialId: string
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/psyche/testimonials`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ testimonialId }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete testimonial");
    }
  } catch (error) {
    console.log("Error deleting testimonial:", error);
    throw error; // Re-throw error to handle it in the calling function
  }
};
