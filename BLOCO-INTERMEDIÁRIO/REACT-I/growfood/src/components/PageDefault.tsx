import React from "react";
import Navbar from "./navbar/Navbar";

interface PageDefaultProps {
  children: React.ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PageDefault;
