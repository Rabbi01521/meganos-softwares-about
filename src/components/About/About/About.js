import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import FounderCoFounder from "../FounderCoFounder/FounderCoFounder";
import GetMoving from "../GetMoving/GetMoving";

const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FounderCoFounder />
      <GetMoving />
      <Footer></Footer>
    </div>
  );
};

export default About;
