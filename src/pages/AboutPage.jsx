import React, { useEffect } from "react";
import AboutUs from "../components/organisms/AboutUs";
import DaikiTeam from "../components/organisms/DaikiTeam";

const AboutPage = () => {
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
      <AboutUs />
      <DaikiTeam />
    </>
  );
};

export default AboutPage;
