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
          I am an AI Data Analyst and RAG Application Developer passionate about transforming raw data into actionable business intelligence. 
          I build AI-powered applications that combine data analytics, SQL, retrieval-augmented generation (RAG), 
          and large language models (LLMs) to deliver context-aware answers and meaningful insights. 
          My work focuses on connecting structured business data with AI to create intelligent analytics solutions that support smarter, data-driven decisions.
          </p>

        </div>

        <div className="about-card">

          <h2> What I Do</h2>

          <p>
             I build AI-powered data analytics solutions that
  transform complex datasets into actionable business
  insights. My work combines data cleaning, exploratory
  data analysis (EDA), SQL analytics, and interactive
  dashboards with Retrieval-Augmented Generation (RAG)
  and large language models (LLMs). I develop intelligent
  applications that connect business data with AI,
  enabling users to ask questions in natural language,
  retrieve relevant knowledge, and make data-driven
  decisions. My toolkit includes Python, Pandas, SQL,
  Power BI, Streamlit, vector databases, and LLM APIs.
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