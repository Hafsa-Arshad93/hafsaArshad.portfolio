import "./about.css";
// import profile from "../assets/profile.png"; // your image

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* <div className="about-image">
          <img src={profile} alt="profile" />
        </div> */}

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hi! I'm a passionate frontend developer who enjoys building
            responsive and modern web applications using React, HTML,
            CSS and JavaScript.
          </p>

          <p>
            I love creating clean UI designs and turning ideas into
            interactive websites. I'm constantly learning new technologies
            to improve my development skills.
          </p>

          <button className="about-btn">Download CV</button>
        </div>

      </div>

    </section>
  );
}

export default About;
