import React, { useEffect } from "react";
import Consult from "../components/organisms/Consult";
import Language from "../components/organisms/Language";
import Engineering from "../components/organisms/Engineering";

const ServicePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <Consult />
      <Language />
      <Engineering />
    </>
  );
};

export default ServicePage;
