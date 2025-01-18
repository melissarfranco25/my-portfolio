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
      
      <section style={skillsStyle}>
       <p>work in progress</p>
      </section>
    </div>
  )
}

export default App;