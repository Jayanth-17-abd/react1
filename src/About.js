import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="header">
        About Page
      </div>

      <div className="content">
        <h1>Welcome to the About Page</h1>
        <p>This page gives basic information about our application.</p>

        <div className="info-box">
          <h2>About Us</h2>
          <p>
            We are a team dedicated to creating simple and effective web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
