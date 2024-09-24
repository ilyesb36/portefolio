import React from 'react';
import HeroSection from '../components/HeroSection';
import TextCard from '../components/TextCard';

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <section className="projects-section">
        <h2>Mes Projets</h2>
        <div className="projects-container">
          <TextCard
            title="Projet 1"
            text="Description du projet 1"
            imgUrl="https://images-dump-ilyes.s3.eu-north-1.amazonaws.com/cat.gif"
          />
          <TextCard
            title="Projet 2"
            text="Description du projet 2"
            imgUrl="https://images-dump-ilyes.s3.eu-north-1.amazonaws.com/cat.gif"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
