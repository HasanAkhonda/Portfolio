import '../../App.css'
import heroImage from '../../assets/hero.jpg'

const Projects = () => {
  return (
    <>
      <section className="showcase" id="projects">
        <h2 className="title">Projects</h2>
        <div className="cardHolder">
          {[1, 2, 3, 4].map((item) => (
            <div className="card" key={item}>
              <img
                src={heroImage}
                alt={`Project ${item}`}
                className="cardImage"
              />
              <div className="cardContainer">
                <h3>Project {item}</h3>
                <p>
                  A modern and responsive app showcasing front-end development
                  skills, including API integration, animations, and sleek UI
                  design.
                </p>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
