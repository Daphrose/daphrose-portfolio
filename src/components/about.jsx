import "../styles/about.css"

function About() {

  return (

    <section className="about" id="about">

      <h1 className="section-title">
        About Me
      </h1>

      <div className="about-container">

        <div className="about-card">

          <h2>Who I Am</h2>

          <p>
            I'm Daphrose, an aspiring Data Analyst and AI Analytics Enthusiast
           a Computer Science finalist from Chuka University currently awaiting graduation.
          </p>

        </div>

        <div className="about-card">

          <h2> What I Do</h2>

          <p>
            I enjoy transforming raw data into meaningful insights through
            interactive dashboards, business intelligence solutions,
            and modern analytics applications.
          </p>

        </div>

        <div className="about-card">

          <h2>Current Focus</h2>

          <p>
            Currently building AI-powered analytics dashboards using
            Python, Streamlit, React, SQL, Plotly, and data visualization tools.
          </p>

        </div>

      </div>

    </section>

  )
}

export default About