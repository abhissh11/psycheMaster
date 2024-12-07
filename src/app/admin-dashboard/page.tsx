import SignOutButton from "@/components/SignOutButton";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <div className="my-32 px-20 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">
          PsycheMaster - Dashboard
        </h1>
        <SignOutButton />
      </div>
      <div className="flex justify-center my-10">
        <Tabs defaultValue="testimonials" className="w-[800px]">
          <TabsList className="grid w-full grid-cols-2 gap-5">
            <TabsTrigger
              value="testimonials"
              className="border border-indigo-600 rounded-xl p-2"
            >
              Testimonials
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="border border-indigo-600 rounded-xl p-2"
            >
              Team Members
            </TabsTrigger>
          </TabsList>
          <TabsContent value="testimonials">
            <h1>testimonials here</h1>
          </TabsContent>
          <TabsContent value="team">
            <h1>teams here</h1>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
