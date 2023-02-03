import React from "react";
import { Outlet, Link } from "react-router-dom";
import Imageten from "../Image/image-10.webp";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import Facility from "./Facility";

function Home() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <Header/>

        <div className="content">
          <h2 className="content1">
            CHOOSE <span className="content-1 text-warning">& CREATE</span>
          </h2>
          <p className="content2">
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Picante comes with 8
            different demos. Get all of them with{" "}
            <strong> one-time purchase! </strong>
            <br />
            Use our <strong>1-click install</strong> wizard to build the website
            in minutes. Unlimited Possibilities with Codeless <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Combine
            parts from various templates in your website!
          </p>
        </div>
        </div>
        <Facility/>
      <Container/>
        <Footer/>
    </>
  );
}

export default Home;
