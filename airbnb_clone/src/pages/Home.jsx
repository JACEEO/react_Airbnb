import React from "react";
import Nav from "../components/Nav";
import Category from "../components/Category";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Category />
      <MainBody />
      <Footer />
    </>
  );
}
