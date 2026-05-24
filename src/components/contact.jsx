import "../styles/contact.css"

function Contact() {

  return (

    <section className="contact" id="contact">

      <h1 className="section-title">
        Contact Me
      </h1>

      <div className="contact-container">

        <div className="contact-card">

          <h2> Email</h2>

          <p>
            daphrose405@gmail.com
          </p>

        </div>

        <div className="contact-card">

          <h2> GitHub</h2>

          <a
            href="https://github.com/Daphrose"
            target="_blank"
          >
            Visit GitHub
          </a>

        </div>

        <div className="contact-card">

          <h2> LinkedIn</h2>

           <a
            href="https://www.linkedin.com/in/daphrose-obuya-614675295/"
            target="_blank"
          >
            Visit LinkedIn
          </a>

        </div>

      </div>

    </section>

  )
}

export default Contact