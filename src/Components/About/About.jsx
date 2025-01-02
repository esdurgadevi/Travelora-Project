import React from 'react'
import './About.css'
import about from '../../assets/about.webp'
import bus from '../../assets/bus.png'
function About()
{
    return(
        <div className='about container' id='about'>
            <div className='about-left'>
               <img src={about} alt='about-image'></img>
            </div>
            <div className='about-right'>
                <div class="busw">
                    <h2>About Us</h2>
                    <div className='busc'><img className='bus' src={bus}></img></div>
                </div>
                <p>
                Welcome to Travelora, your ultimate travel companion! Whether you're planning a relaxing getaway, an adventurous trip, or exploring 
                new cultures, we are here to make your travel experience seamless and memorable. At Travelora, we believe that travel should be 
                accessible, enjoyable, and full of discovery. Our carefully curated destinations offer something for everyone—whether you're 
                seeking breathtaking landscapes, vibrant cities, or hidden gems off the beaten path. Our mission is to inspire wanderlust and 
                guide you through every step of your journey. With comprehensive travel information, top recommendations, and the latest travel 
                tips, we're here to help you make the most of your adventures. Join us and start exploring the world today!
                </p>
            </div>
        </div>
    )
}
export default About
