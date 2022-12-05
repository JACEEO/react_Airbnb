import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Category from "./Category";
import MainBody from "./MainBody";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Category />
      <MainBody />
      <Footer />
    </>
  );
}
