import React from "react";
import HeaderSection from "./HeaderSection";
import ContainerSectionsTabs from "./ContainerSectionsTabs";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <main className="container mx-auto max-w-3xl w-full felx items-center flex-col  h-auto">
      <HeaderSection />
      <ContainerSectionsTabs />
    </main>
  );
};

export default HomePage;
