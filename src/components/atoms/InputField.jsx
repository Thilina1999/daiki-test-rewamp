import React from "react";

const InputField = ({ labelText, type, placeholderText }) => {
  return (
    <div className="grid grid-col text-start my-1 mx-6 h-min">
      <label className="pb-3 text-gray-160 text-base font-normal">{labelText}</label>
      <input
        type={type}
        className="bg-transparent border-0.25 h-10 rounded-xl border-light-blue placeholder-gray-160 placeholder-normal  placeholder:text-base px-4"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default InputField;
