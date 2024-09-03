import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const HomePage = () => {

  return (
    <div className="homepage">
      <Header />

      <section className="main-content">
        <h1>Portfolio<p>Ilyès Boulkrinat</p></h1>
        <div className="content">
          <div className="description">
            <div />
          </div>
          <img src="https://images-dump-ilyes.s3.eu-north-1.amazonaws.com/cat.gif" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
