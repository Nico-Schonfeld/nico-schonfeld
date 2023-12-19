"use client";

import React, { useEffect } from "react";
import { Skeleton, Tab, Tabs } from "@nextui-org/react";
import FeedSection from "./FeedSection";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import BlogSection from "./BlogSection";

const ContainerSectionsTabs = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      <Tabs
        variant="underlined"
        aria-label="Tabs variants"
        color="secondary"
        radius="full"
        className="mt-10 px-10"
      >
        <Tab key="projects" title="Proyectos">
          <FeedSection isLoaded={isLoaded} />
        </Tab>

        <Tab key="about" title="Sobre Mi">
          <AboutMe isLoaded={isLoaded} />
        </Tab>

        {/* <Tab key="blog" title="Blog">
          <BlogSection isLoaded={isLoaded} />
        </Tab> */}
      </Tabs>

      <Footer />
    </>
  );
};

export default ContainerSectionsTabs;
