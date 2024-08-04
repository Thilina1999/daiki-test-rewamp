import React, { useEffect } from "react";
import Title from "../components/organisms/Title";
import Welcome from "../components/organisms/Welcome";
import Content from "../components/organisms/Content";

const HomePage = () => {
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
      <Title />
      <Welcome />
      <Content />
    </>
  );
};

export default HomePage;
