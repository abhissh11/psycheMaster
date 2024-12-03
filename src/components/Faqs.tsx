import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faqs() {
  return (
    <div className="min-h-fit bg-indigo-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image Section */}
        <div className="gray-bg flex justify-center items-center flex-grow-0 flex-shrink-0">
          <div className="w-full md:[580x] lg:w-[630px] ">
            <Image
              src="/images/soulpuzzle.jpg"
              width={500}
              height={500}
              alt="Soul-Puzzle-img"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Accordion Section */}
        <div className="py-10 flex flex-col items-center h-full flex-grow">
          <h1 className="pl-10 text-4xl md:text-5xl lg:text-5xl text-start font-normal font-serif text-yellow-900 tracking-wide leading-snug">
            Frequently Asked Questions
          </h1>
          <div className="w-2/3 my-20 overflow-y-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-yellow-900 text-xl font-serif font-normal">
                  What is your privacy policy for counseling sessions?
                </AccordionTrigger>
                <AccordionContent>
                  Your privacy is our top priority. All sessions are
                  confidential, and we strictly adhere to ethical guidelines to
                  protect your information. Without your explicit consent, no
                  details about your sessions will be shared with anyone.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-yellow-900 text-xl font-serif font-normal">
                  How can I prepare for my first session?
                </AccordionTrigger>
                <AccordionContent>
                  Simply come with an open mind. You can jot down any specific
                  issues you&apos;d like to discuss or goals you want to
                  achieve. This will help make the session more focused and
                  productive.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-yellow-900 text-xl font-serif font-normal">
                  What are the qualifications of your counselors?
                </AccordionTrigger>
                <AccordionContent>
                  All our counselors are certified professionals with
                  specialized training in psychology, counseling, and therapy.
                  They bring years of experience in helping clients overcome
                  challenges and achieve mental wellness.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-yellow-900 text-xl font-serif font-normal">
                  How many sessions will I need?
                </AccordionTrigger>
                <AccordionContent>
                  The number of sessions varies for each individual. Some
                  clients feel better after a few sessions, while others prefer
                  ongoing support. During your first session, your counselor
                  will help outline a plan based on your needs and goals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
