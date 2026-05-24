import "../styles/hero.css"

import profile from "../assets/profile.png"

function Hero() {

  return (

    <section className="hero">

      <div className="hero-left">

        <h1>
          Hi, I'm <span>Daphrose</span>
        </h1>

        <h2>
          Aspiring Data Analyst & AI Analytics Enthusiast
        </h2>

        <p>
          I build interactive dashboards, AI-powered analytics applications,
          and modern data-driven solutions using Python, Streamlit, React,
          SQL, and visualization tools.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="primary-btn">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img src={profile} alt="profile" />

      </div>

    </section>

  )
}

export default Hero