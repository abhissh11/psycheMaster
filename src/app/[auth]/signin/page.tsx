import AdminSignin from "@/components/SigninComponent";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen mt-40 px-6 md:px-20">
      <h1 className="text-center text-2xl font-bold font-sans ">
        Admin Sign In
      </h1>
      <div className="">
        <AdminSignin />
      </div>
    </div>
  );
}
