import React from "react";
import DetailBody from "../components/DetailBody";
import DetailMain from "../components/DetailMain";
import DetailPhoto from "../components/DetailPhoto";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Detail() {
  return (
    <>
      <Nav />
      <DetailBody />
      <DetailPhoto />
      <DetailMain />
      <Footer />
    </>
  );
}
