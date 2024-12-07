"use client";
import { signOut } from "@/app/redux/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";
import { BASE_URL } from "@/constants/config";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/signout`, {
        method: "POST",
      });

      if (response.ok) {
        dispatch(signOut());
        router.push("/auth/signin");
      } else {
        console.log("Failed to sign out");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };
  return (
    <button
      onClick={handleButtonClick}
      className="px-4 py-2 bg-indigo-600 text-white text-base font-semibold hover:bg-indigo-700 rounded"
    >
      Logout
    </button>
  );
}
