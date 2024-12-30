"use client";

import React, { useState } from "react";

const Faq: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I reset my password?",
      answer:
        "To reset your password, go to the login page, click 'Forgot Password,' and follow the instructions sent to your email.",
    },
    {
      id: 2,
      question: "How do I update my billing information?",
      answer:
        "To update your billing info, log in to your account, navigate to the 'Billing' section, and update your payment details.",
    },
    {
      id: 3,
      question: "How can I contact customer support?",
      answer:
        "You can contact customer support via email at support@example.com or call us at +1-800-555-1234.",
    },
    {
      id: 4,
      question: "How do I delete my account?",
      answer:
        "To delete your account, go to 'Settings,' click 'Delete Account,' and confirm the deletion process.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-purple-900 leading-[3.25rem]">
            Commonly Asked Queries
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${
                activeFaq === faq.id
                  ? "bg-indigo-50 border-2 border-purple-600"
                  : "bg-white"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left text-lg font-normal leading-8 text-gray-900 transition duration-500 group"
                onClick={() => toggleFaq(faq.id)}
              >
                <h5
                  className={`${
                    activeFaq === faq.id
                      ? "font-medium text-purple-900"
                      : "font-normal text-gray-900"
                  }`}
                >
                  {faq.question}
                </h5>
                <svg
                  className={`w-6 h-6 transition-transform duration-500 bg-purple-800 text-white rounded-full ${
                    activeFaq === faq.id ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {activeFaq === faq.id && (
                <div className="mt-4 text-base text-indigo-900">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
