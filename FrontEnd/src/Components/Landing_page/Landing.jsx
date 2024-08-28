import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Landing;
