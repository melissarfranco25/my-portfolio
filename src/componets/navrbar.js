import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar , Containter } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return(
       
            <Navbar id="navbar-custom" className={scrolled ? "scrolled" : ""}>
                <Container>
                <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#intro">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
    )
}

export default NavBar;