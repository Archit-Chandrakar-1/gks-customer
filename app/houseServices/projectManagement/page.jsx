"use client";

import dynamic from "next/dynamic";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footer/Footer1";


const ProjectManagement = dynamic(() => import("@/components/houseServices/projectManagement/projectManagement"), { ssr: false });

const Page = () => {
  return (
    <>
      <Header1 />
      <ProjectManagement />
      <Footer1 />
    </>
  );
};

export default Page;
