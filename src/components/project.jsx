import "../styles/project.css"

import aiDashboard from "../assets/ai-dashboard.png"
import excelDashboard from "../assets/excel-dashboard.png"
import powerbiDashboard from "../assets/dashboard.png"

function Projects() {

  return (

    <section className="projects" id="projects">

      <h1 className="section-title">
        My Projects
      </h1>

      <div className="projects-container">

        {/* PROJECT 1 */}

        <div className="project-card">

          <img src={aiDashboard} alt="AI Dashboard" />

          <div className="project-content">

            <h2> AI Sales Analytics Dashboard</h2>

            <p>
              An interactive AI-powered sales analytics dashboard built using
              Python, Streamlit, Plotly, Pandas, and OpenAI integration.
            </p>

            <div className="tech-stack">

              <span>Python</span>
              <span>Streamlit</span>
              <span>Plotly</span>
              <span>Pandas</span>

            </div>

            <a
              href="https://github.com/Daphrose/Ai-sales-analytics-dashboard"
              target="_blank"
            >
              <button>
                View Project
              </button>
            </a>

          </div>

        </div>

        {/* PROJECT 3 */}

<div className="project-card">

  <img src={powerbiDashboard} alt="Power BI Dashboard" />

  <div className="project-content">

    <h2>Power BI Sales Analytics Dashboard</h2>

    <p>
      An interactive Power BI dashboard built using DAX measures,
      KPI cards, slicers, and business intelligence visualizations
      to analyze customer behavior, transaction performance,
      revenue trends, and category insights.
    </p>

    <div className="tech-stack">

      <span>Power BI</span>
      <span>DAX</span>
      <span>Business Intelligence</span>

    </div>

    <a
      href="https://github.com/Daphrose/POWERBI_DASHBOARD"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        View Project
      </button>
    </a>

  </div>

</div>

        {/* PROJECT 2 */}

        <div className="project-card">

          <img src={excelDashboard} alt="Excel Dashboard" />

          <div className="project-content">

            <h2> Excel Sales Dashboard</h2>

            <p>
              A business intelligence dashboard created using,
              Pivot Tables, KPIs, and sales analytics visualizations.
            </p>

            <div className="tech-stack">

            
              <span>Pivot Tables</span>
              <span>KPIs</span>
              <span>Analytics</span>

            </div>

            <a
             href="https://github.com/Daphrose/Customer-Behaviour-Dashboard" target="_blank"  
            >
              <button>
                View Project
              </button>
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Projects