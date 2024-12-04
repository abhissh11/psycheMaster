"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/signin");
    }
  });

  return (
    <div className="mt-40 px-20 min-h-screen">
      <h1 className="text-center">Admin DashBoard Here</h1>
    </div>
  );
}
