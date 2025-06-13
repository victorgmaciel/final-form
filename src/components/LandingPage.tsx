import React from "react";
import "./LandingPage.css";
import poweringUp from '../assets/imgs/poweringUp.png'
import { cardData } from "../components/CardSection";
import { t } from '../i18n';
import ButtonWithEffect from "./ButtonWithEffect";


const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="site-name"> {t('siteName')} </div>
        <div className="nav-links">
          <a href="#">Page</a>
          <a href="#">Page</a>
          <a href="#">Page</a>
          <button className="nav-button">Button</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-title-container">
          <h1 className="hero-title">{t('landingTitle')}</h1>
          <img src={poweringUp} alt="Powering Up" className="hero-title-image" />
        </div>
        <p className="hero-subtext">
          {t('landingSubtitle')}
        </p>

        {/* POW button */}
        <ButtonWithEffect t={t} />
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <h2 className="section-heading">{t('sectionHeading')}</h2>
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <img className="card-image" src={card.img} alt={card.alt} />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
