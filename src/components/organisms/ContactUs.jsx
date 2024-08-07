import React from "react";
import ContactForm from "../molecules/ContactForm";
import ContactUsTitle from "../molecules/ContactUsTitle";

const ContactUs = () => {
  return (
    <div className="pt-7 pb-7 hide">
      <div className="relative rounded-3xl h-auto bg-white md:rounded-10 p-10 bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden shadow-sm">
        <div>
          <ContactUsTitle />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
