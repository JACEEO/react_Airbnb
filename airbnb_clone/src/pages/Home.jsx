import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Category from "../components/Category";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

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
