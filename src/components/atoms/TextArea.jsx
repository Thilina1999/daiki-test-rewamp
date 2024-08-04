import React from "react";

const TextArea = ({ labelText, placeholderText }) => {
  return (
    <div className="grid grid-col text-start m-4">
      <label className="pb-3 text-gray-160 text-base font-normal">{labelText}</label>
      <textarea
        className="bg-transparent border-0.25 min-h-56 max-h-72 rounded-xl border-light-blue placeholder-gray-160 placeholder:text-base p-4 placeholder-normal"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default TextArea;
