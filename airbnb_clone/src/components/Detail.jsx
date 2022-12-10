import React from "react";
import DetailBody from "./DetailBody";
import DetailMain from "./DetailMain";
import DetailPhoto from "./DetailPhoto";
import Footer from "./Footer";
import Nav from "./Nav";

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
