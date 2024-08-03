import React from "react";
import logo from "../../assets/png/logo.png";
import { contactFooterLinkItems } from "../../constants/molecules/FooterLinks";

const Footer = () => {
  const Address = contactFooterLinkItems.reduce(function (filtered, option) {
    if (option.type === 1) {
      filtered.push({ header: option.header });
    }
    return filtered;
  }, []);
  console.log(Address);
  const PhoneNo = contactFooterLinkItems.reduce(function (filtered, option) {
    if (option.type === 2) {
      filtered.push({ header: option.header });
    }
    return filtered;
  }, []);

  const email = contactFooterLinkItems.reduce(function (filtered, option) {
    if (option.type === 3) {
      filtered.push({ header: option.header });
    }
    return filtered;
  }, []);

  return (
    <div className="relative z-footer mb-2 px-8 flex flex-col space-y-2 rounded-3xl bg-white pt-6 shadow-sm">
      <div className="grid grid-auto-rows-4 gap-2 mt-3 w-full">
        <div className="grid w-full md:grid-cols-8 lg:max-w-[1440px] lg:mx-auto">
          <div className="col-span-6 md:col-span-1 pb-2 hidden md:block"></div>
          <div className="col-span-6 md:col-span-1 pb-2  text-dark-blue font-semibold md:text-right md:mr-5 text-center">
            Location
          </div>
          <div className="col-span-6 md:pr-6 lg:pr-0 md:col-span-3 text-dark-blue text-center md:text-justify lg:text-center">
            <div className="pb-4 md:pb-4">
              {Address.map((item, index) => (
                <div className="text-md" key={index}>
                  {item.header}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-1 pb-2  text-dark-blue text-center font-semibold md:text-right md:mr-5">
            Contact
          </div>
          <div className="col-span-6 md:col-span-1 pb-2  text-dark-blue text-center md:text-left">
            <div className="pb-1 md:pb-2">
              {PhoneNo.map((item, index) => (
                <div
                  className={
                    "text-md pb-1 hover:text-light-green transition-all duration-500"
                  }
                  key={index}
                >
                  <a href={`tel:${item.header}`}>{item.header}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-1 pb-6 hidden md:block"></div>
        </div>
      </div>
      <div className="border-t-[1px] px-5 pt-5">
        <div className="w-full grid sm:grid-cols-6 pb-6 h-auto justify-between items-center">
          <div className="col-span-6 sm:col-span-3 flex flex-col sm:flex-row items-center sm:justify-start">
            <div className="md:ml-6 max-w-[110px] max-h-[45px] pr-4">
              <img alt="diaki-logo" src={logo} />
            </div>
            <div className="text-dark-blue w-full mx-0 text-sm pt-3 text-center sm:pt-0 lg:text-nowrap lg:text-left">
              <p className="text-sm font-normal text-dark-blue">
                © Daiki, 2018 – 2024. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3 flex flex-col sm:flex-row items-center sm:justify-end">
            <div className="md:ml-8 cursor-pointer text-center md:text-left sm:pr-3">
              <p className="text-sm font-normal text-dark-blue hover:font-semibold active:transition-all duration-300 delay-150 ease-out">
                Privacy Policy
              </p>
            </div>
            <div className="md:ml-8 cursor-pointer text-center md:text-left md:mr-5">
              <p className="text-sm font-normal text-dark-blue hover:font-semibold active:transition-all duration-300 delay-150 ease-out">
                Terms and Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
