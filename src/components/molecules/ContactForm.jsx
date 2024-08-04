import React from "react";
import InputField from "../atoms/InputField";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";

const ContactForm = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="lg:form-container">
        <div className="grid md:grid-rows-none md:grid-cols-6 md:px-5">
          <div className="grid md:col-span-3">
            <InputField
              type={"text"}
              labelText={"First Name"}
              placeholderText={"Enter the First Name"}
            />
          </div>
          <div className="grid md:col-span-3">
            <InputField
              type={"text"}
              labelText={"Last Name"}
              placeholderText={"Enter the Last Name"}
            />
          </div>
          <div className="grid md:col-span-6">
            <InputField
              type={"text"}
              labelText={"Phone Number"}
              placeholderText={"Enter the Phone Number"}
            />
          </div>
          <div className="grid md:col-span-6">
            <InputField
              type={"text"}
              labelText={"Email"}
              placeholderText={"Enter the Email"}
            />
          </div>
          <div className="grid md:col-span-6">
            <TextArea
              labelText={"Comment"}
              placeholderText={"Enter the Comment"}
            />
          </div>
          <div className="grid md:col-span-6 justify-center m-5">
            <Button
              bgColor="bg-dark-blue"
              height=""
              text="Send Message"
              type="discuss"
              width="w-50"
              customStyles="flex text-white items-center gap-1 justify-center p-2  focus:ring-dark-blue focus:ring-2 focus:bg-transparent transition-all ease-in duration-200 focus:text-light-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
