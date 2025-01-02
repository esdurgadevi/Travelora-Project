import React from 'react'
import logo from '../../assets/logo1.png'
import './NavBar.css'
function NavBar() {
    return (
        <nav className="container">
            <img src={logo} alt="logonav" />
            <h1>Travelora</h1>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Destis">Destinations</a></li>
                <li><a href="#about">About Us</a></li>
                <li>Services</li>
                <li>Testimonial</li>
                <li><button href="#contact" className="btn">Contact Us</button></li>
            </ul>  
        </nav>
    )
}


export default NavBar
