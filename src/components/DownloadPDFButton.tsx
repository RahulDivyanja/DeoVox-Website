"use client";

import React from "react";

export default function DownloadPDFButton() {
  const handleDownload = () => {
    alert("Services PDF download placeholder");
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3.5 rounded-md font-bold text-sm text-center transition-colors shadow-sm cursor-pointer"
    >
      Download Services PDF
    </button>
  );
}
