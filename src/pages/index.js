import Header from "../components/Header";
import Footer from "../components/Footer";
import TextCard from "../components/TextCard";
import { useState } from "react";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <h1 className="main-title">
        Portfolio<p>Ilyès Boulkrinat</p>
      </h1>

      <TextCard
        title="Mes projets"
        text="Voici la brève description de mes projets. Vous pouvez cliquer sur les images pour voir les détails."
        positionImg="left"
        imgUrl="https://images-dump-ilyes.s3.eu-north-1.amazonaws.com/cat.gif"
      />
      <TextCard
        title="Mon blog"
        text="Voici mon blog où je partage mes idées et ressentis sur mon parcours."
        positionImg="left"
        imgUrl="https://images-dump-ilyes.s3.eu-north-1.amazonaws.com/cat.gif"
      />
      <Footer />
    </div>
  );
};

export default HomePage;
