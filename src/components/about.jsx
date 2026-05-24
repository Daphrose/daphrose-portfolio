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
                I am Obuya  Daphrose, a Computer Science finalist from Chuka University
            with a growing passion for Data Analytics and business intelligence.
            I enjoy working with data to uncover patterns, generate insights,
            and build solutions that help transform raw information into
            meaningful decision-making tools.
          </p>

        </div>

        <div className="about-card">

          <h2> What I Do</h2>

          <p>
             My analytics journey began through exploring data visualization,
            dashboard development, and sales analysis projects.
            Over time, I have gained experience in data cleaning,
            KPI generation, exploratory data analysis (EDA),
            and interactive dashboard creation using tools like
            Python, Pandas, Plotly, Excel, Streamlit, and SQL.
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