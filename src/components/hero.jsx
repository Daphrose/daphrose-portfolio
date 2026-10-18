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
           AI Data Analyst and RAG Application Developer
        </h2>

        <p>
           I build AI-powered analytics applications that
          connect business data with large language models
          to deliver intelligent insights and context-aware
          answers. Using Python, SQL, RAG, Streamlit, and
          Power BI, I transform raw data into practical
          solutions that support smarter decisions.
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