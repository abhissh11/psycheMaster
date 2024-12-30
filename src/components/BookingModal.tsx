"use client";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-200 rounded-xl shadow-lg w-11/12 max-w-md p-6 relative flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-purple-900 font-serif text-center text-2xl font-bold mb-4">
          PsycheMaster
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["Diagnosis", "Therapy", "Epilepsy", "Family Counseling"].map(
            (text) => (
              <button
                key={text}
                className="px-4 py-2 bg-purple-800 text-white font-semibold rounded-full hover:bg-purple-900"
              >
                {text}
              </button>
            )
          )}
        </div>
        <button className="w-2/3 px-4 py-2 mb-4 bg-green-500 text-white rounded-xl hover:bg-green-600">
          Continue
        </button>
        <div className="flex justify-between  gap-3 border-t-2 border border-purple-800 pt-4">
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            WhatsApp
          </button>
          <div className="border-l-2 border-purple-900"></div>
          <button className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
