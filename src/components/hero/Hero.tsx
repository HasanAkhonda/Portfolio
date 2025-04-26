import '../../App.css'
import heroImage from '../../assets/hero.jpg'


const Hero = () => {
  return (
    <>
      <section className="heroSection" id="about">
        <div className="heroImage">
          <img src={portfolioPicture} alt="Hero" />
        </div>
        <div className="heroContent">
          <h2>Hi, I'm Md Mahmud Hasan Akhonda</h2>
          <p>
            I'm a passionate{" "}
            <strong>Front-End Web and Mobile Hero Developer</strong> who turns
            creative ideas into seamless user experiences. I specialize in
            building modern, responsive web interfaces and mobile Heros using the
            latest technologies.
          </p>O
          <p>
            With a strong foundation in{" "}
            <strong>JavaScript, React, React Native, TypeScript</strong>, and a
            solid understanding of <strong>Database Management</strong> and{" "}
            <strong>API Integration</strong>, I bring projects to life with
            performance, design, and usability in mind.
          </p>
          <button className="mbutton">Hire Me</button>
        </div>
      </section>

      <section className="skillsSection" id="skills">
        <h2 className="title">Skills & Expertise</h2>
        <ul className="skillsList">
          <li>⚡ React.js / React Native</li>
          <li>⚡ JavaScript / TypeScript</li>
          <li>⚡ HTML5 / CSS3 / Tailwind / Sass</li>
          <li>⚡ RESTful API Integration</li>
          <li>⚡ Firebase / MongoDB / MySQL</li>
          <li>⚡ Git / GitHub / CI/CD</li>
          <li>⚡ Responsive Web Design & Accessibility</li>
          <li>⚡ Cross-Platform Mobile Development</li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
