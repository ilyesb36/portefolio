// src/pages/HomePage.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />

      <section id="home" className="section home">
        <div className="content">
          <h1>Bienvenue sur mon site vitrine</h1>
          <p>Je suis [Ton Nom], un développeur web passionné.</p>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="content">
          <h2>À propos de moi</h2>
          <p>Ici, tu pourras ajouter des détails sur toi, ton parcours, tes passions, etc.</p>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="content">
          <h2>Projets</h2>
          <p>Une présentation de tes projets récents.</p>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="content">
          <h2>Compétences</h2>
          <p>Une liste de tes compétences techniques.</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="content">
          <h2>Contact</h2>
          <p>Formulaire de contact ou informations pour te joindre.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
