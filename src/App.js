import React from 'react';
import homePageImage from './assets/home_pg.jpg';
import './index.css';
import NavBar from './componets/navrbar';
import { Container, Nav } from 'react-bootstrap';
import Type from './componets/type';


function App() {

  const introStyle = {
    backgroundImage: `url(${homePageImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'start',
    color: 'white'
  };

  const skillsStyle = {
    height: '100vh',
    margin: 0,
    padding: 0,
    color: 'white',
    alignItems: 'center',
  }

  return (
    <div style={{backgroundColor: '#5C8BA7'}}>
      <section style={introStyle}>
        <NavBar />

        <div style={{ padding: 110, textAlign: "left" }} className="intro">
            <h1>Welcome! I am Melissa Rivera</h1>
            <Type />
        </div>

        <div className="gradient-overlay"></div>
      </section>
      
      <section style={skillsStyle} id="about">
        <div style={{ padding: 110, textAlign: "left" }}>
            <h1>About Me</h1>
            <p>Hello! I'm a senior at UNC Charlotte pursuing a B.S. in Computer Science, with interest in data engineering and analytics. I am also an Early Entry Graduate Student, working toward my advanced degree while completing my undergraduate studies. Last summer, I had the amazing opportunity to intern as a Data Engineering Intern at The Hartford, where I gained hands-on experience in building data visualizations and optimizing data workflows.<br/><br /> I'm passionate about leveraging data to solve real-world problems and continuously improving my skills to make a meaningful impact in the tech industry. Let’s connect and talk all things tech, data, and innovation!</p>
        </div>
      </section>
    </div>
  )
}

export default App;