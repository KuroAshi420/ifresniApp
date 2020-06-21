import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'
import image from '../../images/image.png'

const Styles = styled.div`
.navbar {
    background-color : #40ff4882;
}
.navbar-brand, .navbar-nav .navbar-link {
    color : white;
    &:hover {
        color : white;
    }
    &:link {
        color: white;
    }
}`;
const FadeInDown = styled.div`animation: 2s ${keyframes`${fadeInDown}`} infinite`;
 const NavigationBar = () => {
    return (
        <div>
       <Styles>
           <Navbar expand="lg">
               <Navbar.Brand href="/accueil"><FadeInDown><img src={image} /></FadeInDown></Navbar.Brand>
               <Navbar.Toggle aria-controls ="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
               <Nav className="nl-auto">
                   <Nav.Item><Nav.Link href="/accueil"><h6>Home</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/Profil"><h6>Profil</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/event"><h6>Event</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/Advices"><h6>Advices</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login"><h6>LogOut</h6></Nav.Link></Nav.Item>

               </Nav>
           </Navbar>
       </Styles>
       </div>
    );
}

export default NavigationBar