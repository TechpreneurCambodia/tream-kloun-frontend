import React from 'react';
import { FaBook, FaUpload } from "react-icons/fa";

function ActionButton() {
  return (
    <div className="flex justify-center gap-4">
    <button className="flex items-center px-6 py-3 bg-white text-primary rounded-lg shadow">
      <FaBook className="mr-2" /> ថតសំឡេងភ្លាមៗ
    </button>
    <button className="flex items-center px-6 py-3 bg-white text-primary rounded-lg shadow">
      <FaUpload className="mr-2" /> បញ្ចូលប្រតិចារិក/Upload
    </button>
  </div>
  )
}

export default ActionButton