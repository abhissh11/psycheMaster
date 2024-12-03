import AdminSignup from "@/components/signupComponent";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen pt-40 px-6 md:px-20">
      <h1 className="text-center text-2xl font-bold font-sans ">
        Admin Sign Up
      </h1>
      <div className="">
        <AdminSignup />
      </div>
    </div>
  );
}