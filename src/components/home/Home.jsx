import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">

        {/* Profile Image */}
        <div className="home__img-wrapper">
          <img
            src={Me}
            alt="Sharjeel Khan"
            className="home__img"
          />
        </div>

        {/* Name */}
        <h1 className="home__name">Sharjeel Khan</h1>

        {/* Role */}
        <span className="home__education">
          I&apos;m a Software Engineer
        </span>

        {/* Social Icons */}
        <HeaderSocials />

        {/* CTA Button */}
        <a href="#contact" className="btn">
          Contact Me
        </a>

        {/* Scroll Down Indicator */}
        <ScrollDown />
      </div>

      {/* Decorative Shapes */}
      <Shapes />
    </section>
  );
};

export default Home;
