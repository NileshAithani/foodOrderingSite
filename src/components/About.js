import my from "../Image/Nilesh.jpeg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="Wrapper">
      <div className="about-head">
        <h1>About Me</h1>
        <h3>My Introduction</h3>
      </div>
      <div className="about-body">
        <img src={my} alt="MyImage" />
        <div className="about-desc">
          Hey there,👋 I'm Nilesh a 24-year-old Post-undergrad who is passionate
          about Software Development, UI/UX Design and Product Management.
          Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻
          with 1 years of professional and freelance experience. I share my
          learnings through speaking engagements and write-ups. ✍🏻

          <button>
          <a href="https://drive.google.com/file/d/10P8yDp7h1ieHtDkGXZzxY0X1Bea3ZOKj/view?pli=1" download target="_blank" rel="noopener noreferrer">Resume</a>
          </button>
        </div>
          
      </div>
    </div>
  );
};

export default About;
